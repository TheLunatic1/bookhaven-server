# The Book Haven – Server (API) 📚

📚 Backend RESTful API for **The Book Haven** – a full-stack book management system. Handles all CRUD operations with user-specific data using email from Firebase Auth. <br/>
📚 Backend API for The Book Haven – Node.js + Express + MongoDB | User-specific CRUD operations

🔥 **Live API Base URL**: `https://bookhaven-server.vercel.app/api`

🌐 **Client Live Demo**: [https://bookhaven-client.web.app](https://bookhaven-client.web.app)

### ✨ Features
- Full CRUD operations for books (Create, Read, Update, Delete)
- User-specific books filtering using `userEmail` (perfect for Firebase Auth)
- Quantity management (increment/decrement when borrowing)
- CORS enabled – works seamlessly with Firebase/Vercel/Netlify frontends
- Lightweight, fast, and production-ready
- Deployed on **Vercel Serverless Functions**

### 🛠️ Tech Stack
| Technology       | Purpose                     |
|------------------|-----------------------------|
| Node.js (18+)    | Runtime                     |
| Express.js       | Web framework               |
| MongoDB Atlas    | NoSQL Database              |
| Mongoose         | MongoDB object modeling     |
| CORS             | Allow frontend domains      |
| dotenv           | Environment variables       |

### 📦 Dependencies
``` 
```json
"dependencies": {
  "express": "^4.18.2",
  "mongoose": "^8.0.0",
  "cors": "^2.8.5",
  "dotenv": "^16.3.1"
}
```
### Clone the repository
```
git clone https://github.com/TheLunatic1/bookhaven-server.git
cd bookhaven-server
```

### Install dependencies
```
npm install
```

### Create .env file (see example below)
```
cp .env.example .env
```

### Start development server
```
npm run dev
```


### Required .env variables
```
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string
```

### 📡 API Endpoints

<div class="relative"><div class="absolute top-1 right-1 z-10 print:hidden"><div class="flex flex-row gap-0.5"><button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium leading-[normal] cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-100 [&amp;_svg]:shrink-0 select-none text-fg-secondary hover:text-fg-primary hover:bg-button-ghost-hover disabled:hover:text-fg-secondary disabled:hover:bg-transparent [&amp;_svg]:hover:text-fg-primary h-8 w-8 rounded-full dark:bg-surface-l1 dark:text-text-l1 dark:hover:bg-surface-l2" type="button" aria-label="Copy" data-state="closed"><span style="opacity: 1; transform: none;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="stroke-[2] size-4"><rect x="3" y="8" width="13" height="13" rx="4" stroke="currentColor"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M13 2.00004L12.8842 2.00002C12.0666 1.99982 11.5094 1.99968 11.0246 2.09611C9.92585 2.31466 8.95982 2.88816 8.25008 3.69274C7.90896 4.07944 7.62676 4.51983 7.41722 5.00004H9.76392C10.189 4.52493 10.7628 4.18736 11.4147 4.05768C11.6802 4.00488 12.0228 4.00004 13 4.00004H14.6C15.7366 4.00004 16.5289 4.00081 17.1458 4.05121C17.7509 4.10066 18.0986 4.19283 18.362 4.32702C18.9265 4.61464 19.3854 5.07358 19.673 5.63807C19.8072 5.90142 19.8994 6.24911 19.9488 6.85428C19.9992 7.47112 20 8.26343 20 9.40004V11C20 11.9773 19.9952 12.3199 19.9424 12.5853C19.8127 13.2373 19.4748 13.8114 19 14.2361V16.5829C20.4795 15.9374 21.5804 14.602 21.9039 12.9755C22.0004 12.4907 22.0002 11.9334 22 11.1158L22 11V9.40004V9.35725C22 8.27346 22 7.3993 21.9422 6.69141C21.8826 5.96256 21.7568 5.32238 21.455 4.73008C20.9757 3.78927 20.2108 3.02437 19.27 2.545C18.6777 2.24322 18.0375 2.1174 17.3086 2.05785C16.6007 2.00002 15.7266 2.00003 14.6428 2.00004L14.6 2.00004H13Z" fill="currentColor"></path></svg></span></button></div></div><div dir="auto" class="table-container relative group/table clear-both overflow-scroll flex flex-row" style=""><div class="scroll-gradient-sentinel" style="height: 100%; width: 1px; left: 0px; flex-shrink: 0;"></div><table dir="auto" class="w-fit min-w-[calc(var(--content-width)-13px)] [&amp;&gt;thead&gt;tr&gt;th:last-child]:pr-8"><thead class="sticky [top:var(--thead-sticky-top)] [&amp;_th]:h-10 [background-color:var(--thead-bg-color)] [box-shadow:0_1px_0_0_var(--thead-border-b-color)] border-b-0"><tr class="border-primary/10"><th class="break-words" data-col-size="sm">Method</th><th class="break-words" data-col-size="lg">Endpoint</th><th class="break-words" data-col-size="lg">Description</th><th class="break-words" data-col-size="lg">Auth Required?</th></tr></thead><tbody><tr class="border-primary/10"><td class="break-words" data-col-size="sm" style="white-space: pre-wrap;"><span class="text-sm px-1 rounded-sm !font-mono bg-orange-400/10 text-orange-500 dark:bg-orange-300/10 dark:text-orange-300">GET</span></td><td class="break-words" data-col-size="lg" style="white-space: pre-wrap;"><span class="text-sm px-1 rounded-sm !font-mono bg-orange-400/10 text-orange-500 dark:bg-orange-300/10 dark:text-orange-300">/api/books</span></td><td class="break-words" data-col-size="lg" style="white-space: pre-wrap;">Get all books</td><td class="break-words" data-col-size="lg" style="white-space: pre-wrap;">No</td></tr><tr class="border-primary/10"><td class="break-words" data-col-size="sm" style="white-space: pre-wrap;"><span class="text-sm px-1 rounded-sm !font-mono bg-orange-400/10 text-orange-500 dark:bg-orange-300/10 dark:text-orange-300">GET</span></td><td class="break-words" data-col-size="lg" style="white-space: pre-wrap;"><span class="text-sm px-1 rounded-sm !font-mono bg-orange-400/10 text-orange-500 dark:bg-orange-300/10 dark:text-orange-300">/api/books/my?email=user@example.com</span></td><td class="break-words" data-col-size="lg" style="white-space: pre-wrap;">Get user's own books</td><td class="break-words" data-col-size="lg" style="white-space: pre-wrap;">No (email-based)</td></tr><tr class="border-primary/10"><td class="break-words" data-col-size="sm" style="white-space: pre-wrap;"><span class="text-sm px-1 rounded-sm !font-mono bg-orange-400/10 text-orange-500 dark:bg-orange-300/10 dark:text-orange-300">POST</span></td><td class="break-words" data-col-size="lg" style="white-space: pre-wrap;"><span class="text-sm px-1 rounded-sm !font-mono bg-orange-400/10 text-orange-500 dark:bg-orange-300/10 dark:text-orange-300">/api/books</span></td><td class="break-words" data-col-size="lg" style="white-space: pre-wrap;">Add a new book</td><td class="break-words" data-col-size="lg" style="white-space: pre-wrap;">No (client handles auth)</td></tr><tr class="border-primary/10"><td class="break-words" data-col-size="sm" style="white-space: pre-wrap;"><span class="text-sm px-1 rounded-sm !font-mono bg-orange-400/10 text-orange-500 dark:bg-orange-300/10 dark:text-orange-300">PUT</span></td><td class="break-words" data-col-size="lg" style="white-space: pre-wrap;"><span class="text-sm px-1 rounded-sm !font-mono bg-orange-400/10 text-orange-500 dark:bg-orange-300/10 dark:text-orange-300">/api/books/:id</span></td><td class="break-words" data-col-size="lg" style="white-space: pre-wrap;">Update book (title, quantity, etc.)</td><td class="break-words" data-col-size="lg" style="white-space: pre-wrap;">No (email check inside)</td></tr><tr class="border-primary/10"><td class="break-words" data-col-size="sm" style="white-space: pre-wrap;"><span class="text-sm px-1 rounded-sm !font-mono bg-orange-400/10 text-orange-500 dark:bg-orange-300/10 dark:text-orange-300">DELETE</span></td><td class="break-words" data-col-size="lg" style="white-space: pre-wrap;"><span class="text-sm px-1 rounded-sm !font-mono bg-orange-400/10 text-orange-500 dark:bg-orange-300/10 dark:text-orange-300">/api/books/:id</span></td><td class="break-words" data-col-size="lg" style="white-space: pre-wrap;">Delete a book</td><td class="break-words" data-col-size="lg" style="white-space: pre-wrap;">No (email check inside)</td></tr></tbody></table><div class="scroll-gradient-sentinel" style="height: 100%; width: 1px; right: 0px; flex-shrink: 0;"></div></div></div>

### 🔗 Important Links
<ul dir="auto" class="marker:text-secondary">
<li class="break-words whitespace-pre-wrap [&amp;&gt;ul]:whitespace-normal [&amp;&gt;ol]:whitespace-normal">🚀 <strong class="font-semibold">Live API</strong>: <a href="https://bookhaven-server.vercel.app/api/books" target="_blank" rel="noopener noreferrer nofollow">https://bookhaven-server.vercel.app/api/books</a></li>
<li class="break-words whitespace-pre-wrap [&amp;&gt;ul]:whitespace-normal [&amp;&gt;ol]:whitespace-normal">🖥️ <strong class="font-semibold">Client Repository</strong>: <a href="https://github.com/TheLunatic1/bookhaven-client" target="_blank" rel="noopener noreferrer nofollow">https://github.com/TheLunatic1/bookhaven-client</a></li>
<li class="break-words whitespace-pre-wrap [&amp;&gt;ul]:whitespace-normal [&amp;&gt;ol]:whitespace-normal">⚙️ <strong class="font-semibold">Server Repository</strong>: <a href="https://github.com/TheLunatic1/bookhaven-server" target="_blank" rel="noopener noreferrer nofollow">https://github.com/TheLunatic1/bookhaven-server</a></li>
<li class="break-words whitespace-pre-wrap [&amp;&gt;ul]:whitespace-normal [&amp;&gt;ol]:whitespace-normal">🌍 <strong class="font-semibold">Live Site</strong>: <a href="https://bookhaven-client.web.app" target="_blank" rel="noopener noreferrer nofollow">https://bookhaven-client.web.app</a></li>
</ul>
