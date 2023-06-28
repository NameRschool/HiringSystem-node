import { Request, Response } from 'express';

async function validateEntityExistence<T>(
  service: { getById: (id: string) => Promise<T > },
  entityId: string,
  entityName: string,
  res: Response
): Promise<T | void> {
  const existingEntity = await service.getById(entityId);
  if (!existingEntity) {
    res.status(404).json({ error: `${entityName} not found` });
  }
  return existingEntity;
}
export { validateEntityExistence };

async function validateEntityNotExistence<T>(
  service: { getById: (id: string) => Promise<T > },
  entityId: string,
  entityName: string,
  res: Response
): Promise<T | void> {
  const existingEntity = await service.getById(entityId);
  if (existingEntity) {
    res.status(404).json({ error: ` The id is in use in ${entityName}` });
  }
  return existingEntity;
}
export { validateEntityNotExistence };