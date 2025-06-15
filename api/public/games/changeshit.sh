#!/bin/bash

# Replace serverConfig.host_ws+':'+serverConfig.port with serverConfig.host_ws+':'+serverConfig.port+`?token=${sessionStorage.getItem('sessionId')}`
find . -type f -exec sed -i "s/serverConfig.host_ws\+':'\+serverConfig.port/serverConfig.host_ws\+':'\+serverConfig.port\+`?token=${sessionStorage.getItem('sessionId')}`/g" {} \;

# Replace sessionStorage.setItem('sessionId', token); with sessionStorage.setItem('sessionId', token);
find . -type f -exec sed -i "s/sessionStorage.setItem('sessionId', parseInt(Math.random() \* 1000000));/sessionStorage.setItem('sessionId', token);/g" {} \;