from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from typing import Generator
import os


# arquivo local para o MVP
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./vidaplena.db")

engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()


def get_db() -> Generator:
    """fornece uma sessão do SQLAlchemy e garante fechamento."""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
