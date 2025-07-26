# Rassence – Smart Mess Management Platform for Food Park, VIT Chennai

## Project Overview

Rassence is a full-stack web application designed to digitize and streamline food ordering and credit management for hostel messes. Built as a personal initiative by a VIT Chennai student, it aims to modernize the Food Park mess experience for both students and administrators.

## Key Features

### For Students

-   **Email & Password Login**: Secure authentication
-   **Real-time Credit Tracking**: View current food credit balance and order history
-   **Food Ordering**: Browse menu, place orders, customize arrival time, view estimated prep time
-   **Live Notifications**: Get notified when food is ready
-   **Fallback Options**: Borrow credits from next month or pay by cash if credits are exhausted

### For Admins

-   **Menu Management**: Add, update, or remove food items with price and image
-   **Order Dashboard**: View and manage live/past orders, update status
-   **Credit Control**: Assign, bulk assign, or edit credits for users

## Technology Stack

-   **Frontend**: Next.js, Tailwind CSS
-   **Backend**: Next.js API Routes, Prisma ORM
-   **Database**: PostgreSQL
-   **Authentication**: NextAuth.js or custom auth
-   **Real-time**: Socket.io
-   **Deployment**: Vercel (Next.js), Render/Railway/Supabase (DB)

## Setup Instructions

1. **Clone the repository**
    ```bash
    git clone https://github.com/ShubhamxGupta/orderplease.git
    cd orderplease
    ```
2. **Install dependencies**
    ```bash
    npm install
    ```
3. **Configure environment variables**
    - Copy `.env.example` to `.env` and fill in your PostgreSQL and JWT secrets.
4. **Set up the database**
    ```bash
    npx prisma migrate dev --name init
    npx prisma generate
    ```
5. **Run the development server**
    ```bash
    npm run dev
    ```
6. **Start the Socket.io server**
    ```bash
    node server.js
    ```

## Deployment Guide

-   **Frontend/Backend**: Deploy to Vercel (auto-detects Next.js)
-   **Database**: Use Render, Railway, or Supabase for PostgreSQL
-   **Socket.io**: Deploy `server.js` to a Node.js host (e.g., Railway, Render)
-   **Environment Variables**: Set all secrets in your deployment dashboard
-   **Prisma**: Run migrations and generate client after every schema change

## Contribution & Customization

-   Fork the repo and create a feature branch
-   Use the provided types in `app/types/models.ts` for all new code
-   Run `npx tsc --noEmit` and `npx eslint . --ext .ts,.tsx` before PRs
-   For UI/UX changes, edit Tailwind classes in the `app/` directory

## Design Identity

-   **App Name**: Rassence
-   **Mess Name**: Food Park
-   **Target**: VIT Chennai hostel students and mess operators

## License

MIT
