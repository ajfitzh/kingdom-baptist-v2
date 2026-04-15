FROM node:20-alpine
WORKDIR /app

# 1. Copy package.json AND your JFrog auth configuration
COPY package.json ./
COPY .npmrc ./

# 2. Disable strict SSL for the JFrog proxy substitution
RUN npm config set strict-ssl false

# 3. Install with verbose logging so we can see exactly what is happening
RUN npm install --verbose

# 4. CRITICAL: Remove the .npmrc so your auth token isn't baked into the image!
RUN rm -f .npmrc

# 5. Copy the rest of the application code
COPY . .

# 6. Generate Prisma client and build
RUN npx prisma generate
RUN npm run build

EXPOSE 3000
ENV PORT=3000
ENV NODE_ENV=production

CMD npm start
