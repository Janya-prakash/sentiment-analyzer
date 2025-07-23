from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from textblob import TextBlob

app = FastAPI()

# Allow connection from frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class Review(BaseModel):
    text: str

@app.post("/analyze")
def analyze_sentiment(review: Review):
    blob = TextBlob(review.text)
    sentiment = blob.sentiment.polarity
    result = "Positive" if sentiment > 0 else "Negative" if sentiment < 0 else "Neutral"
    return {"sentiment": result} 
