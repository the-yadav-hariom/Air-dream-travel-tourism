@echo off
title Deploy Air Dream to Vercel
color 0B
echo ============================================================
echo   DEPLOYING AIR DREAM TRAVEL & TOURISM TO VERCEL
echo ============================================================
echo.
echo Running Vercel deployment...
echo.

npx vercel --prod --yes

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [Tip] If you haven't logged in to Vercel yet, please run:
    echo   npx vercel login
    echo Once logged in, run deploy-to-vercel.bat again!
)

echo.
pause
