const GRID_SIZE_Y = 60;
const GRID_SIZE_X = 42;

export function outsideGrid(position) {
  return (
    position.x < 1 ||
    position.x > GRID_SIZE_X ||
    position.y < 1 ||
    position.y > GRID_SIZE_Y
  );
}
