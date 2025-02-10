/**
 * 숫자를 지정된 자릿수의 문자열로 변환하며, 앞자리가 비는 경우 0으로 채웁니다.
 * @param num - 변환할 숫자
 * @param pad - 변환 결과의 총 자릿수 (기본값: 3)
 * @returns 지정된 자릿수만큼 0이 채워진 문자열
 */
export function formatNumber(num: number, pad: number = 3): string {
  return String(num).padStart(pad, "0");
}
