import { expect, test } from "vitest";
import { parseJWTPayload } from "./main";

test.each([
	{
		name: "drip email token",
		token: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZXRvdXIiLCJpc3MiOiJtb25vbGl0aCIsInN1YiI6ImRldG91cl9saW5rIiwiaWF0IjoxNzA3Nzc1NTMzLCJuYmYiOjE3MDc3NzU1MzMsImFjY291bnRfaWQiOiI0Nzc0Mzg0IiwiZGVsaXZlcnlfaWQiOiI1Ym8xc2RyZ212cWRsMjZ3cnU2dyIsInVybCI6Imh0dHBzOi8vd3d3LmludGVydmlld2Nha2UuY29tL3F1ZXN0aW9uL3NpbXVsYXRlLTUtc2lkZWQtZGllP3V0bV9zb3VyY2U9d2Vla2x5X2VtYWlsJnV0bV9jYW1wYWlnbj13ZWVrbHlfZW1haWwmdXRtX21lZGl1bT1lbWFpbCZfX3M9bm1xbnRieHNzd2h6cXF2YXc3cjEmdXRtX3NvdXJjZT1kcmlwJnV0bV9tZWRpdW09ZW1haWwmdXRtX2NhbXBhaWduPUludGVydmlldytDYWtlK1dlZWtseStQcm9ibGVtKyUyMzQ5MSUzQStTaW11bGF0ZSs1LXNpZGVkK2RpZSJ9.7kHG5YzITpFyjxYc8Z_lq5WcQTKs0BHufIm9lcmx8H4",
		payload: { "aud": "detour", "iss": "monolith", "sub": "detour_link", "iat": 1707775533, "nbf": 1707775533, "account_id": "4774384", "delivery_id": "5bo1sdrgmvqdl26wru6w", "url": "https://www.interviewcake.com/question/simulate-5-sided-die?utm_source=weekly_email&utm_campaign=weekly_email&utm_medium=email&__s=nmqntbxsswhzqqvaw7r1&utm_source=drip&utm_medium=email&utm_campaign=Interview+Cake+Weekly+Problem+%23491%3A+Simulate+5-sided+die" },
	},
])("$name", ({token, payload}) => {
		expect(parseJWTPayload(token)).toEqual(payload);
})
