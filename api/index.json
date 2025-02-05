from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from starlette.responses import HTMLResponse

app = FastAPI()

app.mount("/static", StaticFiles(directory="."), name="static")

@app.get("/", response_class=HTMLResponse)
async def serve_index():
    with open("templates/index.html", "r") as file:
        return HTMLResponse(content=file.read(), status_code=200)

@app.get("/videomain.mp4")
async def get_video():
    return FileResponse("videomain.mp4", media_type="video/mp4")
