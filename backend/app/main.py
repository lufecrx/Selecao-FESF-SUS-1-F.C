from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from .database import engine, Base
from .api.endpoints.pacientes import router as pacientes_router

app = FastAPI(
    title="VidaPlena API",
    description="API do MVP VidaPlena para gestão de Pacientes e Agendamentos.",
    version="0.1.0",
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

@app.get("/health", tags=["Health"])
def health_check() -> JSONResponse:
    """Rota de checagem de integridade da API."""
    return JSONResponse(status_code=200, content={"status": "ok", "service": "VidaPlena API"})


# Registrar routers
app.include_router(pacientes_router)
