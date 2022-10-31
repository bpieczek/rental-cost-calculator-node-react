@echo off
title Backend
cd frontend
start "Frontend" cmd /k "title Frontend & npm start"
cd ../backend
npm run run

