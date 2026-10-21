@echo off
title Air Dream - Phone Demo & QR Code
color 0B
echo ============================================================
echo   AIR DREAM TRAVEL & TOURISM - PHONE DEMO LINKS
echo ============================================================
echo.

:: Get local IP address
for /f "tokens=4" %%a in ('route print ^| findstr 0.0.0.0.*0.0.0.0 ^| findstr /v "0.0.0.0.*0.0.0.0.*0.0.0.0"') do (
    set LOCAL_IP=%%a
)

echo [1] WORLDWIDE PHONE DEMO LINK (Any Phone / Any Network):
echo     https://the-yadav-hariom.github.io/Air-dream-travel-tourism/
echo.
if not "%LOCAL_IP%"=="" (
    echo [2] SAME WI-FI PHONE DEMO LINK (Phone connected to same Wi-Fi):
    echo     http://%LOCAL_IP%:3000
    echo.
)
echo [3] VERCEL DEMO LINK:
echo     https://air-dream-travel-tourism.vercel.app/
echo.
echo ============================================================
echo   Opening QR Code & Mobile Simulator in your browser...
echo ============================================================

:: Start background node server if not running
start /B node server.js >nul 2>&1

:: Open the QR helper page
timeout /t 1 >nul
start "" "http://localhost:3000/phone-demo.html"

echo.
echo Scan the QR code on your screen using your phone's camera!
echo.
pause
