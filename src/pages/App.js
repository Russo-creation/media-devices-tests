import React, { memo, useEffect } from "react";

const App = () => {
  useEffect(() => {
    function headphone() {
      // return navigator.mediaDevices.enumerateDevices().then(devices => {
      //   const audioDevices = devices.filter(device => device.kind == 'audiooutput')
      //   const activeDevice = audioDevices[0]
      //   return activeDevice.label.indexOf('(Bluetooth)') !== -1
      // })

      alert("changed");
      // Maybe use enumerateDevices() to see what connected
    }

    console.log(navigator.mediaDevices);

    alert(navigator.mediaDevices);

    navigator.mediaDevices.addEventListener("devicechange", () => headphone());
    return () => {
      navigator.mediaDevices.removeEventListener("devicechange", () =>
        headphone()
      );
    };
  }, []);

  return <div>Hello gh-cd test</div>;
};

export default memo(App);
