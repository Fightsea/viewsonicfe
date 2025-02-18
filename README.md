# ViewSonic FE 作業考題 (Nicky Tseng)

## Environment Setup

### `npm install` or `yarn install`

## Run the Web

### `npm run dev` or `yarn dev`

## Vite Default Port (5173)

### http://localhost:5173/

## 前端畫面

### 初始畫面

![Alt text](public/images/101.png)

### 複製功能 (ID)

![Alt text](public/images/102.png)

### 複製功能 (Link)

![Alt text](public/images/103.png)

### Tab 切換 (Student List)

![Alt text](public/images/104.png)

### Tab 切換 (Group) - 五個人為一組

![Alt text](public/images/105.png)

### 按 … 跳出 Menu

![Alt text](public/images/106.png)

### 按 + - 有對應作用

![Alt text](public/images/107.png)

### 按 X 或「Back to Class List」會關閉對應畫面，重整後出現原畫面

![Alt text](public/images/108.png)

### RWD 排版

![Alt text](public/images/109.png)

## API 程式碼位置

[./src/api/mockServer.ts](https://github.com/Fightsea/viewsonicfe/blob/34ae0383b7fd8d9ca393181782200f808db36955/src/api/mockServer.ts)

## API

### GET /api/classes

#### 取得 Class 清單

![Alt text](public/images/201.png)

### GET /api/class/:id/students

#### 取得特定 Class Id 的 Student 清單

![Alt text](public/images/202.png)
