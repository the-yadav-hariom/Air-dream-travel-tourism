@echo off
title Push Air Dream to GitHub
color 0A
echo ============================================================
echo   PUSHING AIR DREAM TRAVEL TO GITHUB REPOSITORY
echo   https://github.com/the-yadav-hariom/Air-dream-travel-tourism
echo ============================================================
echo.

:: 1. Initialize git if not already initialized
if not exist ".git" (
    echo [1/5] Initializing Git repository...
    git init
) else (
    echo [1/5] Git repository verified.
)

:: 2. Configure origin remote
echo [2/5] Setting up remote origin to Air-dream-travel-tourism...
git remote remove origin >nul 2>&1
git remote add origin https://github.com/the-yadav-hariom/Air-dream-travel-tourism.git

:: 3. Stage all files
echo [3/5] Staging all project files (HTML, CSS, JS, images, configs)...
git add -A

:: 4. Commit
echo [4/5] Creating commit with latest changes and CSS fixes...
git commit -m "Complete Air Dream Travel & Tourism website: fixed CSS loading, 3D book cards, image assets, responsive design"

:: 5. Set branch to main and push
echo [5/5] Pushing to main branch on GitHub...
git branch -M main
git push -u origin main

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [Notice] Standard push had conflicts with remote. Forcing push to update repository...
    git push -u origin main --force
)

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ============================================================
    echo   SUCCESS: All project files are successfully pushed!
    echo   Repository: https://github.com/the-yadav-hariom/Air-dream-travel-tourism
    echo ============================================================
) else (
    echo.
    echo [Notice] If GitHub requested credentials, please authenticate in your browser or Git Credential Manager.
)

echo.
pause
