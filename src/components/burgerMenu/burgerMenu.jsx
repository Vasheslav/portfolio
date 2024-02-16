import React, { useState } from 'react';

import ButtonMobileMenu from '../buttonMobileMenu/buttonMobileMenu';
import MobileMenu from '../mobileMenu/mobileMenu';

import css from './burgerMenu.module.scss';

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={css.burgerMenu}>
      <ButtonMobileMenu open={open} setOpen={setOpen} />
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default BurgerMenu;
