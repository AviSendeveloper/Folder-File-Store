# Folder-File-Store

Folder and file storage in node

## Project Structure

```bash
├── app.js
├── Config
│   ├── Database.js
│   └── WinstonLogger.js
├── Controllers
│   ├── AuthController.js
│   └── FolderController.js
├── log
│   ├── all.log
│   ├── error.log
│   ├── internalerror.log
│   └── warning.log
├── Middlewares
│   └── isAuth.middleware.js
├── Model
│   ├── Folder.js
│   └── User.js
├── package.json
├── package-lock.json
├── README.md
├── Routes
│   ├── auth.route.js
│   └── folder.route.js
├── Services
│   ├── FolderService.js
│   └── UserService.js
├── Util
│   └── jwt.js
└── Validation
    ├── Auth
    │   ├── index.js
    │   ├── login.js
    │   └── register.js
    ├── Folder
    │   ├── create.js
    │   └── index.js
    └── validator.js
```
