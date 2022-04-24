/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

export default () => {
  const [visible, setVisible] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState('80%');

  function dismiss() {
    Keyboard.dismiss();
    setVisible(false);
  }

  useEffect(() => {
    function onKeyboardShow(e) {
      setKeyboardHeight(e.endCoordinates.height);
      setVisible(true);
    }

    function onKeyboardHide() {
      setKeyboardHeight('80%');
      setVisible(false);
    }

    const showSubscription = Keyboard.addListener(
      'keyboardWillShow',
      onKeyboardShow
    );
    const hideSubscription = Keyboard.addListener(
      'keyboardWillHide',
      onKeyboardHide
    );

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return {
    visible,
    keyboardHeight,
    dismiss,
  };
};
