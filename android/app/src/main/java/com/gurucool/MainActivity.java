package com.gurucool;
import com.BV.LinearGradient.LinearGradientPackage;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    new LinearGradientPackage();
    return "Gurucool";

    
  }
}
