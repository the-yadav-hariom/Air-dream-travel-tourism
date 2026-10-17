@echo off
title Push Air Dream to GitHub
color 0A
echo ============================================================
echo   PUSHING AIR DREAM TRAVEL TO GITHUB REPOSITORY
echo   https://github.com/the-yadav-hariom/Air-dream-travel-tourism
echo ============================================================
echo.

:: Initialize git if not already initialized
if not exist ".git" (
    echo [1/5] Initializing Git repository...
    git init
) else (
    echo [1/5] Git repository already initialized.
)

:: Configure origin remote
echo [2/5] Setting up remote origin...
git remote remove origin >nul 2>&1
git remote add origin https://github.com/the-yadav-hariom/Air-dream-travel-tourism.git

:: Check status and stage all files
echo [3/5] Staging all project files (including CSS, images, vercel config)...
git add -A

:: Commit
echo [4/5] Creating commit for CSS and deployment fixes...
git commit -m "Fix CSS loading on deployed site: static headers, relative paths, .nojekyll, static package.json"

:: Set branch to main and push
echo [5/5] Pushing to main branch on GitHub...
git branch -M main
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ============================================================
    echo   SUCCESS: Code pushed to GitHub successfully!
    echo   Repository: https://github.com/the-yadav-hariom/Air-dream-travel-tourism
    echo.
    echo   Your CSS files are now committed and will load cleanly
    echo   on both Vercel and GitHub Pages!
    echo ============================================================
) else (
    echo.
    echo [Notice] Trying force push to overwrite remote branch...
    git push -u origin main --force
)

echo.
pause
