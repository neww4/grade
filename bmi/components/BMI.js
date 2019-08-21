export default class BMI{
  bmiCalculate(w,h)
  {
    return w/(h**2);
  }

  equal(bmi,region)
  {
    if(region == 'asia')
    {
      if(bmi <=18.5)
      {
        return "Under weight";
      }
      else if(18.5<bmi && bmi<=24.9)
      {
        return "Normal weight";
      }
      else if(24.9<bmi && bmi<=29.9)
      {
        return "Overweight";
      }
      else
      {
        return "Obesity";
      }
    }
    if(region == 'western')
    {
      if(bmi <=28.5)
      {
        return "Under weight";
      }
      else if(28.5<bmi && bmi<=34.9)
      {
        return "Normal weight";
      }
      else if(34.9<bmi && bmi<=39.9)
      {
        return "Overweight";
      }
      else
      {
        return "Obesity";
      }
    }
  }
}
