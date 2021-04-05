// A child is playing with a ball on the nth floor of a tall building.
// The height of this floor, h, is known.

// He drops the ball out of the window. The ball bounces (for example),
// to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her
// window (including when it's falling and bouncing?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive
// integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is
// strictly greater than the window parameter.

// Examples:
// - h = 3, bounce = 0.66, window = 1.5, result is 3

// - h = 3, bounce = 1, window = 1.5, result is -1

// (Condition 2) not fulfilled).

function bouncingBall(h, bounce, window) {
  // count when it falls and when it bounces
  // change height as it bounces (multiply by the bounce percentage)
  // can count when it bounces higher than the window and when it falls separately? maybe to make it easier

  let count = 1;
  let height = h;

  if (h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) {
    return -1;
  }

  while (height > window) {
    height *= bounce;

    if (height > window) {
      count += 2;
    }
  }

  console.log(count);
  return count;
}

// better solution
function bouncingBall(h, bounce, window) {
  let rebounds = -1;
  if (bounce > 0 && bounce < 1) {
    while (h > window) {
      h *= bounce;
      rebounds += 2;
    }
  }
  return rebounds;
}
