import React from "react";
import Container from "../Container";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <div className="flex justify-between items-center py-5 max-sm:flex-col-reverse max-sm:gap-y-3">
          <div>©{date} all Copy rights are reserved @NewOne</div>
          <div className="flex justify-between items-center gap-4">
            <Link href="#"><Image src='/images/1.png' alt='facebook' width={25} height={25}/></Link>
            <Link href="#"><Image src='/images/2.png' alt='instagram' width={25} height={25}/></Link>
            <Link href="#"><Image src='/images/3.png' alt='twiter' width={25} height={25}/></Link>
            <Link href="#"><Image src='/images/4.png' alt='youtube ' width={25} height={25}/></Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
