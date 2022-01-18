const GRID_SIZE_Y = 30;
const GRID_SIZE_X = 20;

export function outsideGrid(position) {
  return (
    position.x < 1 ||
    position.x > GRID_SIZE_X ||
    position.y < 1 ||
    position.y > GRID_SIZE_Y
  );
}
