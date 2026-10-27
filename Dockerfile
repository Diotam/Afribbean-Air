# Step 1: Use the Node.js official image as the base image
FROM node:22-alpine

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json, yarn.lock, and install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Step 4: Copy the .env file explicitly
#COPY .env .env

# Step 5: Copy the entire project into the container
COPY . .

# Step 6: Build the Next.js app
RUN yarn build

# Step 7: Expose the port that the app runs on
EXPOSE 4000

# Step 8: Start the Next.js app
CMD ["yarn", "start"]
