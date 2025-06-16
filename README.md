# CAPbot

CAPbot is a lightweight Discord bot that leverages a PyTorch-based image captioning model to generate natural-language descriptions for any image you post. It wraps my [Image Captioning project](https://github.com/theSohamTUmbare/Image-Captioning-in-Pytorch) in a simple `/cap` slash command so you can utlize this bot to get alt-text for your images, accessibility features, or just have fun generating captions on discord server to test my different image captioning models.

---

## 🛠️ Update!!!

I have added my new Captioning Model - DETR_powered_Captioning to the default `/cap` command CAPbot. This model is more powerful than the previous LSTM captioning model. You can discover the model and it near sota results on the [DETR_powered_Image_Captioning](https://github.com/theSohamTUmbare/DETR_powered_image_captioning) repo! </br>
You can still use the previous LSTM powered image captioning model by the command `/cap_v1`!

---

## 🔍 Features

- **Slash command interface**  
  Use `/cap image:<your_image>` to get a descriptive caption for any image you upload.
- **PyTorch ResNet + LSTM captioning**  
  Powered by the same [Image Captioning project](https://github.com/theSohamTUmbare/Image-Captioning-in-Pytorch) I built.
- **Lightweight**  
  Only depends on `discord.js` for Discord API and your existing PyTorch model artifacts.
- **Easy to extend**  
  Swap in your own model checkpoint, customize prompts, or add more commands.

---

## 📋 Prerequisites

- **Node.js** v16 or higher  
- **Python 3.8+** with:
  - `torch`
  - `torchvision`
  - `fastapi`
  - `uvicorn`
  - my Image Captioning repo installed 
- A trained model checkpoint (e.g. `model_epoch_100.pth`) in your captioning API
- A Discord application + bot token (see [Discord Developer Portal](https://discord.com/developers/applications))

---

## 🚀 Setup & Installation

1. **Clone this repo**  
   ```bash
   git clone https://github.com/theSohamTUmbare/CAPbot.git
   cd CAPbot
2. **Install JavaScript dependencies**
   ```bash
   npm install
3. **Install Python dependencies**
   ```bash
   pip install torch torchvision fastapi uvicorn
4. **Configure environment variables**
   Create a .env file at the project root:
   ```ini
   DISCORD_TOKEN=your-bot-token
    CLIENT_ID=your-application-client-id

---

## 🏃 Running the Bot

1. **start the captioning API**
   ```bash
   run predict.py
2. **Launch the Discord bot (in another terminal):**
   ```bash
   npm start
Then goto the bot, it will automatically register the `/cap` command. You can use it as follows - 
  ```txt
  User> /cap image: <attach an image file>
  Bot> “a small dog running through a grassy field with ...”
  ```
---

## Usage
Simply type /cap and attach an image to get a caption back.
### INPUT: 
![input](results/input.png) 
### OUTPUT: 
![output](results/output.png)

---
🧑‍💻 Happy Experimenting! 🔬

