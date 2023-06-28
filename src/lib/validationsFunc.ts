import { Request, Response } from 'express';

async function validateEntityExistence<T>(
  service: { getById: (id: string) => Promise<T | null> },
  entityId: string,
  entityName: string,
  res: Response
): Promise<T | null> {
  const existingEntity = await service.getById(entityId);
  if (!existingEntity) {
    res.status(404).json({ error: `${entityName} not found` });
    return null;
  }
  return existingEntity;
}
