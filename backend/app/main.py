from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="VidaPlena API",
    description="API do MVP VidaPlena para gestão de Pacientes e Agendamentos.",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health", tags=["Health"])
def health_check() -> dict[str, str]:
    return {"status": "ok", "service": "VidaPlena API"}
