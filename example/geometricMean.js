function geometricMean(start, end) {
  start = start|0;
  end = end|0;

  return +exp(+logSum(start, end) / +((end - start)|0));
}
