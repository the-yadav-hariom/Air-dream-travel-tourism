@echo off
title Syncing Card Images
echo Copying your uploaded card images into assets\cards ...
if not exist "assets\cards" mkdir "assets\cards"
copy /Y "C:\Users\hario\.gemini\antigravity-ide\brain\77e24771-f204-4317-ba9d-104dbbde6991\.user_uploaded\media_1792255830332.png" "assets\cards\card1.png" >nul 2>&1
copy /Y "C:\Users\hario\.gemini\antigravity-ide\brain\77e24771-f204-4317-ba9d-104dbbde6991\.user_uploaded\media_1792255998371.jpg" "assets\cards\card2.jpg" >nul 2>&1
copy /Y "C:\Users\hario\.gemini\antigravity-ide\brain\77e24771-f204-4317-ba9d-104dbbde6991\.user_uploaded\media_1792256004995.jpg" "assets\cards\card3.jpg" >nul 2>&1
copy /Y "C:\Users\hario\.gemini\antigravity-ide\brain\77e24771-f204-4317-ba9d-104dbbde6991\.user_uploaded\media_1792256015178.jpg" "assets\cards\card4.jpg" >nul 2>&1
copy /Y "C:\Users\hario\.gemini\antigravity-ide\brain\77e24771-f204-4317-ba9d-104dbbde6991\.user_uploaded\media_1792256043061.jpg" "assets\cards\card5.jpg" >nul 2>&1
copy /Y "C:\Users\hario\.gemini\antigravity-ide\brain\77e24771-f204-4317-ba9d-104dbbde6991\competitive_fare_card_1792256208155.jpg" "assets\cards\card6.jpg" >nul 2>&1
echo All card images copied successfully!
