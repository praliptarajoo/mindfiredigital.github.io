import Link from "next/link";
import React from "react";
import github from "../../../../public/images/social-media/github.png";
import redirect from "../../../../public/images/social-media/maximize.png";
import Image from "next/image";

interface Props {
  title: string;
  shortDescription: string;
  githubUrl?: string;
  documentationUrl?: string;
}

export default function ProjectCard({
  title,
  shortDescription,
  githubUrl,
  documentationUrl,
}: Props) {
  return (
    <div className='border-2 p-8 transition-[box-shadow] shadow-none hover:shadow-xl bg-slate-50/70'>
      <h3 className='font-bold text-lg tracking-widest text-mindfire-text-black capitalize '>
        {title}
      </h3>
      <p className='mt-3 text-mf-dark tracking-wide leading-10'>
        {shortDescription}
      </p>
      {(githubUrl || documentationUrl) && (
        <div className='flex gap-4 justify-end mt-6 pt-6 border-t-2'>
          {githubUrl && githubUrl !== "NA" ? (
            <Link href={githubUrl!} target='_blank'>
              <Image src={github} height={20} width={20} alt='facebook_img' />
            </Link>
          ) : null}
          {documentationUrl && documentationUrl !== "NA" ? (
            <Link href={documentationUrl} target='_blank'>
              <Image src={redirect} height={20} width={20} alt='facebook_img' />
            </Link>
          ) : null}
        </div>
      )}
    </div>
  );
}
