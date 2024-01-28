import React, { useState } from 'react';

import ButtonMobileMenu from '../buttonMobileMenu/buttonMobileMenu';
import MobileMenu from '../mobileMenu/mobileMenu';

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <ButtonMobileMenu open={open} setOpen={setOpen} />
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default BurgerMenu;
