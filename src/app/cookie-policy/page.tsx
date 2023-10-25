import { cookieData } from '@/constants';
import React from "react";

export default function CookiePolicyPage() {
  return (
    <div className="max-w-4xl mx-auto my-10 px-6">
      <p className="tracking-wider text-mindfire-content-p-text-color">
        Cookies are small pieces of text that are used to store information on
        web browsers. They help in storing and receiving identifiers and other
        data on computers, smartphones, and other devices. In this policy, we
        collectively refer to all such technologies as &quot;cookies.&quot; We
        utilize cookies to enhance your experience on our open source websites,
        including all associated content, documentation,
        information,collectively known as the &quot;Website.&quot;
      </p>
      <div className="flex flex-col gap-10 my-10">
        {cookieData.map(({ title, description }, index) => {
          return (
            <div key={index}>
              <h3 className="mb-2 text-mindfire-content-p-text-color font-semibold text-lg tracking-wider">
                {title}
              </h3>
              <p className="tracking-wider text-mindfire-content-p-text-color">
                {description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
