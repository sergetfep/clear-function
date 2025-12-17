import { healthStatus } from "../js/healthStatus";

describe("healthStatus function", () => {
  it('should return "healthy" when health is greater than 50', () => {
    expect(healthStatus({ name: "Маг", health: 90 })).toBe("healthy");
  });

  it('should return "wounded" when health is between 15 and 50', () => {
    expect(healthStatus({ name: "Маг", health: 30 })).toBe("wounded");
  });

  it('should return "critical" when health is less than or equal to 15', () => {
    expect(healthStatus({ name: "Маг", health: 10 })).toBe("critical");
  });
});
