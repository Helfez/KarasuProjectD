from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from typing import Optional, List
import uvicorn

# Initialize FastAPI app
app = FastAPI(
    title="Karasu Ring Design API",
    description="AI-powered ring design and 3D generation API",
    version="1.0.0"
)

# CORS middleware for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://*.zeabur.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models
class RingDesignRequest(BaseModel):
    style: str
    material: str
    size: float
    description: Optional[str] = None

class RingDesign(BaseModel):
    id: str
    style: str
    material: str
    size: float
    description: Optional[str]
    image_url: Optional[str]
    model_3d_url: Optional[str]
    price: float

# Health check endpoint
@app.get("/")
async def root():
    return {"message": "Karasu Ring Design API is running"}

@app.get("/health")
async def health_check():
    return {"status": "healthy", "service": "karasu-backend"}

# Ring design endpoints
@app.post("/api/rings/design", response_model=RingDesign)
async def create_ring_design(request: RingDesignRequest):
    """Generate AI-powered ring design"""
    # TODO: Implement AI design generation
    return RingDesign(
        id="temp-id",
        style=request.style,
        material=request.material,
        size=request.size,
        description=request.description,
        image_url=None,
        model_3d_url=None,
        price=299.99
    )

@app.get("/api/rings", response_model=List[RingDesign])
async def get_rings():
    """Get all ring designs"""
    # TODO: Implement database query
    return []

@app.get("/api/rings/{ring_id}", response_model=RingDesign)
async def get_ring(ring_id: str):
    """Get specific ring design"""
    # TODO: Implement database query
    raise HTTPException(status_code=404, detail="Ring not found")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
