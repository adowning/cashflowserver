<?php
namespace app\controller;
use support\Log;

use support\Request;

class SpinController
{

    public function handleSpin(Request $request, $gameName)
    {
        Log::info('begin spin');
        // 1. Construct the correct namespace and class name from the URL parameter.
        $serverClass = "\\app\\games\\" . $gameName . "\\Server";

        // 2. Check if this game module exists to prevent errors.
        if (!class_exists($serverClass)) {
            return json(['error' => 'Game not found'], 404);
        }

        // 3. Get the state data sent from your TypeScript server.
        $gameStateData = $request->post();

        // 4. Instantiate and run the specific game server.
        $server = new $serverClass();
        $responseState = $server->handle($gameStateData);

        // 5. Return the JSON response.
        return json($responseState);
    }
}