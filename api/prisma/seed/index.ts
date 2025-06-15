import {
  PrismaClient,
  Role as PrismaRole,
  // Currency as PrismaCurrency, // Currency model is deprecated
  Operator as PrismaOperator, // Renamed from OperatorAccess
  User as PrismaUser,
  Account as PrismaAccount,
  UserProfile as PrismaUserProfile,
  VipInfo as PrismaVipInfo,
  Wallet as PrismaWallet,
  Transaction as PrismaTransaction,
  GameProvider as PrismaGameProvider,
  Game as PrismaGame,
  Product as PrismaProduct,
  Tournament as PrismaTournament,
  GameSession as PrismaGameSession,
  GameSpin as PrismaGameSpin,
  KeyMode,
  PaymentMethod,
  // Add other Prisma types if needed from '../generated/'
} from '../generated/' // Adjust import if your generated client is elsewhere
import { faker } from '@faker-js/faker'
import fs from 'fs'
import path from 'path'

// Import actual seed functions from their files
import loadGames from './loadgames'
import seedProducts from './seedProducts'
import { seedOperators } from './seedOperator'
import { seedUsersAndAccounts } from './seedAuth'
import { seedUserProfiles } from './seedUserProfiles'
import { seedVipInfos } from './seedVip'
import { seedWalletsAndTransactions } from './seedTransactions'
import { seedGameProviders } from './seedGameProviders'
// import { seedGameLaunchLinks } from './seedGames'; // File 'seedGames.ts' exports 'seedGameLaunchLinks'
import { seedGameSessionsAndSpins } from './seedGameSessionsAndSpins'
import { seedTournaments } from './seedTournaments'
// seedCurrency.ts is removed as Currency model is deprecated

const prisma = new PrismaClient()

const triggerSqlPath = path.resolve(__dirname, '../scripts/trigger_func.sql')

async function dropCustomDbObjects(client: PrismaClient) {
  console.log('💧 Dropping custom triggers and functions...')
  try {
    await client.$executeRawUnsafe(
      `DROP TRIGGER IF EXISTS profile_change_trigger ON "user_profiles";`
    )
    console.log('Dropped trigger: profile_change_trigger on user_profiles')
    await client.$executeRawUnsafe(`DROP TRIGGER IF EXISTS user_change_trigger ON "user";`)
    await client.$executeRawUnsafe(
      `DROP TRIGGER IF EXISTS transaction_change_trigger ON "transactions";`
    )
    console.log('Dropped trigger: user_change_trigger on user')
    await client.$executeRawUnsafe(`DROP FUNCTION IF EXISTS notify_spec_data_change();`)
    console.log('Dropped function: notify_spec_data_change')
    console.log('✅ Custom triggers and functions dropped successfully.')
  } catch (error) {
    console.error('❌ Error dropping custom triggers and functions:', error)
  }
}

async function applyCustomDbObjects(client: PrismaClient) {
  console.log('✨ Applying custom triggers and functions from trigger_func.sql...')

  // Manually defined statements from your trigger_func.sql
  // IMPORTANT: Ensure these statements are exact copies of the commands in your .sql file
  // and that each element is a complete, executable SQL statement.
  const statements = [
    // Statement 1: The entire CREATE OR REPLACE FUNCTION block
    `CREATE OR REPLACE FUNCTION notify_spec_data_change()
RETURNS TRIGGER AS $$
DECLARE
  changed_fields text[];
  old_json jsonb;
  new_json jsonb;
  primary_key_data jsonb;
  payload jsonb;
BEGIN
  IF TG_OP = 'UPDATE' THEN
    old_json := to_jsonb(OLD);
    new_json := to_jsonb(NEW);
    -- Get changed column names
    SELECT array_agg(key) INTO changed_fields
    FROM jsonb_object_keys(new_json) AS key
    WHERE (old_json->key) IS DISTINCT FROM (new_json->key);
    primary_key_data := jsonb_build_object('_id', NEW._id); -- Ensure '_id' is your actual PK column name
  ELSIF TG_OP = 'DELETE' THEN
    old_json := to_jsonb(OLD);
    new_json := NULL;
    primary_key_data := jsonb_build_object('_id', OLD._id); -- Ensure '_id' is your actual PK column name
  ELSE -- INSERT
    old_json := NULL;
    new_json := to_jsonb(NEW);
    primary_key_data := jsonb_build_object('_id', NEW._id); -- Ensure '_id' is your actual PK column name
  END IF;

  payload := jsonb_build_object(
    'timestamp', now()::text,
    'operation', TG_OP,
    'schema', TG_TABLE_SCHEMA,
    'table', TG_TABLE_NAME,
    'data', CASE WHEN TG_OP = 'DELETE' THEN old_json ELSE new_json END,
    'primaryKeyData', primary_key_data,
    'columnNamesChanged', CASE WHEN TG_OP = 'UPDATE' THEN changed_fields ELSE NULL END
  );

  PERFORM pg_notify('spec_data_change', payload::text);

  RETURN CASE WHEN TG_OP = 'DELETE' THEN OLD ELSE NEW END;
END;
$$ LANGUAGE plpgsql`,

    //     // Statement 2
    //     `DROP TRIGGER IF EXISTS user_change_trigger ON "user"`,

    //     // Statement 3
    //     `CREATE TRIGGER user_change_trigger
    // AFTER INSERT OR UPDATE OR DELETE ON "user"
    // FOR EACH ROW EXECUTE FUNCTION notify_spec_data_change()`,

    // Statement 4
    `DROP TRIGGER IF EXISTS profile_change_trigger ON "user_profiles"`,

    // Statement 5
    `CREATE TRIGGER profile_change_trigger
AFTER INSERT OR UPDATE OR DELETE ON "user_profiles"
FOR EACH ROW EXECUTE FUNCTION notify_spec_data_change()`,

    // Statement 6: Based on the snippet "DROP TRIGGER IF EXISTS transaction..."
    // Please verify the exact table name and trigger name from your full trigger_func.sql file.
    // Assuming "transactions" table and "transaction_change_trigger"
    `DROP TRIGGER IF EXISTS transaction_change_trigger ON "transactions"`,

    // If there's a corresponding CREATE TRIGGER for "transactions", add it here as a new statement.
    // For example:
    // `CREATE TRIGGER transaction_change_trigger
    // AFTER INSERT OR UPDATE OR DELETE ON "transactions"
    // FOR EACH ROW EXECUTE FUNCTION notify_spec_data_change()`
  ]

  try {
    for (const stmt of statements) {
      const trimmedStmt = stmt.trim() // Should already be trimmed if copied correctly
      if (trimmedStmt.length === 0) continue

      console.log(
        `Executing: ${trimmedStmt
          .substring(0, 200)
          .replace(/\s\s+/g, ' ')
          .replace(/\r?\n|\r/g, ' ')}...`
      )
      await client.$executeRawUnsafe(trimmedStmt)
    }
    console.log('✅ Custom triggers and functions applied successfully.')
  } catch (error) {
    console.error('❌ Error applying custom triggers and functions:', error)
    // To help debug which statement failed, you could add:
    // console.error('Failed statement snippet:', statements[statements.indexOf(stmt)]?.substring(0,100));
    throw error
  }
}
const tableNames = [
  // 'TournamentGamePlay',
  // 'TournamentReward',
  // 'TournamentParticipant',
  // 'TournamentGame',
  // 'Tournament',
  'game_providers',
  'game_sessions',
  'game_spins',
  'game_launch_links',
  'operators',
  'game_spins',
  'game_launch_links',
  'game_sessions',
  'rebate_transactions',
  'transactions',
  'wallets',
  'products',
  'vip_infos',
  'user_profiles',
  'operator_invitations',
  'session',
  'account',
  'user',
  'games',
]

// Adjust tableNames: remove 'currencies', change 'operator_access' to 'operator' (or actual DB table name)
// const adjustedTableNames = tableNames
//   .filter((name) => name !== 'currencies')
//   .map((name) => (name === 'operator_access' ? 'operator' : name))

async function clearDatabase(client: PrismaClient) {
  console.log('🧹 Clearing database tables...')
  try {
    for (const tableName of tableNames) {
      // Use adjusted list
      console.log(`  Truncating ${tableName}...`)
      // Make sure 'tableName' matches the actual database table name (considering @@map)
      await client.$executeRawUnsafe(`TRUNCATE TABLE "${tableName}" RESTART IDENTITY CASCADE;`)
    }
    console.log('✅ Database tables cleared.')
  } catch (e: any) {
    console.error('❌ Error clearing database:', e.message)
  }
}

async function main() {
  console.log('🚀 Starting database seed process...')
  await prisma.$connect()

  await dropCustomDbObjects(prisma)
  await clearDatabase(prisma)

  console.log('🌱 Seeding core data...')

  // --- Seed Operators ---
  // seedOperators returns a single Operator object
  // Type changed from PrismaOperatorAccess to PrismaOperator
  const mainOperator: PrismaOperator = await seedOperators(prisma)
  if (!mainOperator) {
    console.error('Main operator was not seeded or returned. Aborting.')
    await prisma.$disconnect()
    return
  }
  console.log(`Using main operator: ${mainOperator.name} (ID: ${mainOperator.id})`)

  // --- Currency codes (no longer a separate table/model) ---
  const defaultCurrencyCode = 'USD' // Default currency to be used
  const availableCurrencyCodes = ['USD', 'EUR', 'FUN'] // Example currency codes available
  console.log(
    `Using currency codes: ${availableCurrencyCodes.join(', ')} with default: ${defaultCurrencyCode}`
  )

  // --- Seed Users and Accounts ---
  // seedUsersAndAccounts returns { adminUser: User, users: User[] }
  const authResult = await seedUsersAndAccounts(prisma)
  const seededRegularUsers: PrismaUser[] = authResult.users
  const adminUser: PrismaUser | undefined = authResult.adminUser

  console.log(
    `Seeded ${seededRegularUsers.length} regular users and ${adminUser ? 1 : 0} admin user.`
  )

  const allUsersToCreateProfilesFor = adminUser
    ? [adminUser, ...seededRegularUsers]
    : [...seededRegularUsers]
  if (allUsersToCreateProfilesFor.length === 0) {
    console.error('No users available for profile seeding. Aborting.')
    await prisma.$disconnect()
    return
  }

  // --- Seed User Profiles ---
  // seedUserProfiles expects (prisma, users: User[], operatorId: string, defaultCurrencyCode: string)
  // UserProfile.activeCurrencyType will use defaultCurrencyCode string
  const userProfiles: PrismaUserProfile[] = await seedUserProfiles(
    prisma,
    allUsersToCreateProfilesFor,
    mainOperator.id,
    defaultCurrencyCode
  )
  console.log(`Seeded ${userProfiles.length} user profiles.`)

  if (userProfiles.length === 0) {
    console.error('No user profiles seeded. Aborting further dependent seeding.')
    await prisma.$disconnect()
    return
  }

  // --- Seed VIP Infos ---
  const vipInfos = await seedVipInfos(prisma, userProfiles)
  console.log(`Seeded ${vipInfos.length} VIP infos.`)

  // --- Seed Wallets and Transactions ---
  // seedWalletsAndTransactions (from seedTransactions.ts) no longer takes currencies array.
  // It takes (prisma, userProfiles, operatorId, minTransactionsPerUser?, maxTransactionsPerUser?)
  // Wallet model does not have a currency field. Transactions will use string currency codes.
  const { wallets, transactions: initialTransactions } = await seedWalletsAndTransactions(
    prisma,
    userProfiles,
    mainOperator.id,
    2, // minTransactionsPerUser
    5 // maxTransactionsPerUser
  )
  console.log(
    `Seeded ${wallets.length} wallets and ${initialTransactions.length} initial transactions.`
  )

  // --- Seed Game Providers ---
  const gameProviders: PrismaGameProvider[] = await seedGameProviders(prisma)
  console.log(`Seeded ${gameProviders.length} game providers.`)

  // --- Load Games (from games2.json via loadgames.ts) ---
  // loadGames expects (prisma, key: { id: string })
  let loadedGamesFromJSON: PrismaGame[] = []
  console.log(mainOperator.id)
  try {
    loadedGamesFromJSON = (await loadGames(prisma, { id: mainOperator.id })) as PrismaGame[]
    // console.log(`Loaded ${loadedGamesFromJSON.length} games using loadgames.ts.`)
  } catch (e: any) {
    console.log(e)
    throw new Error('Error loading games with loadgames.ts:', e)
  }

  const allGamesFromDb = await prisma.game.findMany({ where: { operatorId: mainOperator.id } })
  if (allGamesFromDb.length === 0) {
    console.warn(
      'No games found in DB after loading. Subsequent game-related seeds might be empty.'
    )
  } else {
    // --- Seed Game Sessions and Spins ---
    const { gameSessions, gameSpins } = await seedGameSessionsAndSpins(
      prisma,
      userProfiles,
      allGamesFromDb,
      1,
      3,
      5,
      10
    )
    console.log(`Seeded ${gameSessions.length} game sessions and ${gameSpins.length} game spins.`)

    // --- Seed Tournaments ---
    const adminProfileForTournament = userProfiles.find((up) => up.role === PrismaRole.ADMIN)
    if (adminProfileForTournament) {
      const tournaments = await seedTournaments(
        prisma,
        userProfiles,
        allGamesFromDb,
        adminProfileForTournament
      )
      console.log(`Seeded ${tournaments.length} tournaments and related data.`)
    } else {
      console.warn('Admin UserProfile not found for tournament seeding. Skipping tournaments.')
    }
  }

  // --- Seed Products ---
  // seedProducts (from seedProducts.ts) now takes (prisma, operatorKey: { id: string }, currencyID: string)
  // Product model itself doesn't seem to have currencyId.
  // If seedProducts.ts still uses currencyID for filtering or some other logic, pass a default.
  // Otherwise, seedProducts.ts might need refactoring if Product is truly currency-agnostic.
  // For now, passing a default currency string as per its current signature.
  try {
    await seedProducts(
      prisma,
      { id: mainOperator.id }, // operatorKey
      defaultCurrencyCode // currencyID (string)
    )
    console.log('Product seeding attempted.')
  } catch (e) {
    console.error('Error seeding products with seedProducts.ts:', e)
  }

  // --- Seed Todos ---
  // const todos = await seedTodos(prisma, 5)
  // console.log(`Seeded ${todos.length} todos.`)

  await applyCustomDbObjects(prisma)

  console.log('✅ Database seed finished successfully.')
  await prisma.$disconnect()
}

main().catch(async (e) => {
  console.error('Seeding failed:')
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})
// import { PrismaClient, Role as PrismaRole } from '../generated/' // Adjust import if your generated client is elsewhere
// import { faker } from '@faker-js/faker'

// // Import your provided seeding functions
// // Ensure these paths are correct relative to this index.ts file
// import loadGames from './loadgames'
// import seedProducts from './seedProducts'

// // Import modular seed functions
// // import { seedCurrencies } from './seedCurrency'
// import { seedOperators } from './seedOperator'
// import { seedUsersAndAccounts } from './seedAuth'
// import { seedUserProfiles } from './seedUserProfiles'
// import { seedVipInfos } from './seedVip'
// import { seedWalletsAndTransactions } from './seedTransactions'
// import { seedGameProviders } from './seedGameProviders'
// import { seedGameLaunchLinks } from './seedGames' // For GameLaunchLinks if needed
// import { seedGameSessionsAndSpins } from './seedGameSessionsAndSpins'
// import { seedTournaments } from './seedTournaments'
// import { seedTodos } from './seedTodo'

// const prisma = new PrismaClient()

// const tableNames = [
//   // Order is important for TRUNCATE due to foreign keys.
//   // Start with tables that are frequently referenced or have cascading deletes.
//   // Leaf tables or tables with fewer outgoing relations first, or use CASCADE carefully.
//   'TournamentGamePlay',
//   'TournamentReward',
//   'TournamentParticipant',
//   'TournamentGame',
//   'Tournament',
//   'game_spins',
//   'game_launch_links',
//   'game_sessions', // UserProfile has a direct relation to currentGameSession
//   'rebate_transactions',
//   'transactions',
//   'wallets',
//   'operator_invitations',
//   'products',
//   'games',
//   'GameProvider',
//   'vip_infos', // UserProfile has a required relation to VipInfo
//   'user_profiles',
//   'operator_access_keys',
//   'todo',
//   'session', // Auth tables
//   'account', // Auth tables
//   'verification', // Auth tables (mapped name)
//   'user', // Auth tables
// ]

// async function truncateTables() {
//   console.log('Attempting to truncate tables...')
//   for (const tableName of tableNames.reverse()) {
//     // Reverse order for truncate might be safer for dependencies
//     try {
//       await prisma.$executeRawUnsafe(`TRUNCATE TABLE "${tableName}" RESTART IDENTITY CASCADE;`)
//       console.log(`Successfully truncated "${tableName}".`)
//     } catch (error) {
//       console.error(`Error truncating table "${tableName}":`, error)
//       // Decide if you want to throw or continue
//     }
//   }
//   console.log('Table truncation process finished.')
// }

// async function main() {
//   console.log('Starting database seeding...')
//   await truncateTables()

//   // 1. Seed Currencies (Prerequisite for Products)
//   // const defaultCurrency = await seedCurrencies(prisma)
//   // if (!defaultCurrency) {
//   //   console.error('Failed to seed currencies. Halting seed process.')
//   //   return
//   // }
//   console.log(`Seeded currency: 'USD`)

//   // 2. Seed Operators (Prerequisite for many other entities)
//   const mainOperator = await seedOperators(prisma)
//   if (!mainOperator) {
//     console.error('Failed to seed operators. Halting seed process.')
//     return
//   }
//   console.log(`Seeded operator: ${mainOperator.name}`)

//   // 3. Seed Users (Admin and Regular Users)
//   const { adminUser, users: regularUsers } = await seedUsersAndAccounts(prisma)
//   console.log(`Seeded 1 admin and ${regularUsers.length} regular users.`)
//   const allSeededUsers = [adminUser, ...regularUsers].filter((u) => u) // Filter out potential nulls if admin wasn't created

//   if (allSeededUsers.length === 0) {
//     console.error('No users were seeded. Halting profile and subsequent seeding.')
//     return
//   }

//   // 4. Seed UserProfiles & VipInfos (VipInfo is created within seedUserProfiles due to strict relation)
//   const userProfiles = await seedUserProfiles(prisma, allSeededUsers, mainOperator.id, 'USD')
//   console.log(`Seeded ${userProfiles.length} user profiles (includes VIP info stubs).`)

//   // 5. Update/Enrich VipInfos (optional, if seedUserProfiles only created stubs)
//   // const vipInfos = await seedVipInfos(prisma, userProfiles); // seedVipInfos can now primarily update
//   // console.log(`Updated/Enriched ${vipInfos.length} VIP infos.`);

//   // 6. Seed Wallets and initial Transactions (e.g., initial deposits)
//   const { wallets, transactions } = await seedWalletsAndTransactions(
//     prisma,
//     userProfiles,
//     mainOperator.id,
//     2,
//     5
//   )
//   console.log(`Seeded ${wallets.length} wallets and ${transactions.length} initial transactions.`)

//   // 7. Seed Game Providers
//   const gameProviders = await seedGameProviders(prisma)
//   console.log(`Seeded ${gameProviders.length} game providers.`)

//   // 8. Load Products (using your provided script)
//   try {
//     const products = await seedProducts(prisma, { id: mainOperator.id }, 'USD')
//     console.log(`Loaded ${products.length} products using seedProducts.ts.`)
//   } catch (e) {
//     console.error('Error loading products with seedProducts.ts:', e)
//   }

//   // 9. Load Games (using your provided script)
//   let loadedGames: any[] = []
//   try {
//     loadedGames = await loadGames(prisma, { id: mainOperator.id })
//     console.log(`Loaded ${loadedGames.length} games using loadgames.ts.`)
//   } catch (e) {
//     console.error('Error loading games with loadgames.ts:', e)
//   }

//   const allGamesFromDb = await prisma.game.findMany({ where: { operatorId: mainOperator.id } })
//   if (allGamesFromDb.length === 0) {
//     console.warn(
//       'No games found in DB after loading. Subsequent game-related seeds might be empty.'
//     )
//   } else {
//     // 10. Seed Game Launch Links (Optional, if needed)
//     // await seedGameLaunchLinks(prisma, allGamesFromDb, userProfiles, [mainOperator]);

//     // 11. Seed Game Sessions and Spins (more casino activity)
//     const { gameSessions, gameSpins } = await seedGameSessionsAndSpins(
//       prisma,
//       userProfiles,
//       allGamesFromDb,
//       1,
//       3,
//       5,
//       20
//     )
//     console.log(`Seeded ${gameSessions.length} game sessions and ${gameSpins.length} game spins.`)

//     // 12. Seed Tournaments
//     const tournaments = await seedTournaments(prisma, allGamesFromDb, userProfiles, mainOperator.id) // Pass adminUser.id or operator.id as creator
//     console.log(`Seeded ${tournaments.length} tournaments and related data.`)
//   }

//   // 13. Seed Todos
//   const todos = await seedTodos(prisma, 5)
//   console.log(`Seeded ${todos.length} todos.`)

//   console.log('Database seeding completed successfully! 🌱')
// }

// main()
//   .catch((e) => {
//     console.error('Error during seeding:', e)
//     process.exit(1)
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })
