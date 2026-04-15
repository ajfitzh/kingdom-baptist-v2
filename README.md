# Kingdom Baptist Church Website (v2)

This is the Next.js application for Kingdom Baptist Church. 

**Recent Architecture Update:** We have migrated away from the external Baserow.io dependency. The application is now fully containerized and uses a local PostgreSQL database managed via Prisma ORM.

## 🏗️ Architecture

This project uses Docker Compose to orchestrate three services:
1. **`web`**: The Next.js frontend application.
2. **`db`**: A dedicated PostgreSQL 15 database.
3. **`studio`**: A visual, spreadsheet-like Admin UI (Prisma Studio) for managing database records.

---

## 🚀 Quick Start

### Prerequisites
You must have [Docker Desktop](https://www.docker.com/products/docker-desktop/) (or Docker Engine + Docker Compose) installed on your machine.

### 1. Build and Run the Containers
Open your terminal in the root directory of this project and run:

```bash
docker-compose up --build -d
```
*Note: The `-d` flag runs the containers in the background.*

### 2. Access the Application
Once the containers are running, you can access the different services via your web browser:

* 🌐 **Public Website:** [http://localhost:3000](http://localhost:3000)
* 🛠️ **Admin Dashboard:** [http://localhost:5555](http://localhost:5555)

---

## 📝 Managing Data (Sermons & Events)

You do **not** need to write SQL to update the website. We have bundled Prisma Studio directly into the Docker environment.

1. Navigate to **http://localhost:5555**
2. Click on the `Sermon` or `ChurchEvent` model.
3. Click **"Add Record"** to create a new entry.
4. Fill out the fields exactly like a spreadsheet.
5. Click **"Save"** (the green button). 
6. Refresh the main website (`http://localhost:3000`), and your new data will appear instantly!

---

## 🛑 Stopping the Application

To gracefully stop the containers without losing your database data, run:

```bash
docker-compose down
```

*(Your PostgreSQL data is saved to a persistent Docker volume named `pgdata`. Even if you tear down the containers, your sermons and events will still be there the next time you run `docker-compose up`.)*

---

## 🔧 Troubleshooting (Corporate Network / Proxy Issues)

If you are building this image on a restrictive network (e.g., DoD/Navy networks with JFrog Artifactory), the `npm install` step inside the Docker container may fail with a `401 Unauthorized` or SSL error. 

**To fix this:**
1. Ensure your valid `.npmrc` file (containing your JFrog auth token) is copied into the root folder of this project before building. 
2. The `Dockerfile` is specifically configured to temporarily use this `.npmrc` file to bypass the proxy, and will securely delete it before finalizing the image.
