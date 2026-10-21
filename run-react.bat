@echo off
title Borderlink Travel & Tours - React.js Development Server
color 0B
echo ============================================================
echo   ⚛️  BORDERLINK TRAVEL & TOURS - REACT.JS WEB APPLICATION
echo ============================================================
echo.

:: Check if node_modules exists
if not exist "node_modules\" (
  echo [Notice] Installing React and Vite dependencies...
  echo This only happens on the first run. Please wait a moment...
  call npm install
  if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [Notice] npm install encountered an issue.
    echo Opening instant React demo in your browser...
    start "" "react-demo.html"
    pause
    exit /b
  )
)

echo.
echo Starting Vite React Dev Server...
echo Opening React application in your default browser...
echo.

:: Launch Vite Dev Server
npm run dev
