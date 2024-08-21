// src/utils/generateEmailBody.js
export const generateEmailBody = (jobTitle, name, company, phoneNumber, linkedIn, recepiantName) => {
    const linkedInAnchor = linkedIn
    ? `${linkedIn}`
    : '';

    const phoneNumberYes = phoneNumber ? `${phoneNumber}` : '';
    const recepiantNameYes = recepiantName ? `${recepiantName}` : `[Hiring Manager's Name]`;

    const templateBodies = {
      'FullStack Developer': `
    Dear ${recepiantNameYes},
    
    I hope this email finds you well. My name is ${name}, and I am writing to express my interest in the FullStack Developer position at ${company}. With a solid background in both front-end and back-end development, I have a deep understanding of building scalable and efficient web applications.
    
    I am proficient in [mention key technologies, e.g., JavaScript, Node.js, React, SQL, etc.], and have successfully completed several projects that demonstrate my ability to handle end-to-end development. I am excited about the opportunity to contribute to your team and help deliver outstanding products to your clients.
    
    Please find my resume and portfolio attached for your review. I look forward to the possibility of discussing how I can contribute to ${company}.
    
    Thank you for considering my application.
    
    Best regards,
    ${name}
    ${linkedInAnchor}
    ${phoneNumberYes}
      `,
      'Frontend Developer': `
    Dear ${recepiantNameYes},

    My name is ${name}, and I am eager to apply for the Frontend Developer position at ${company}. With a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React and Vue.js, I have developed visually appealing and highly functional user interfaces.

    I am passionate about creating seamless user experiences and continuously staying updated with the latest trends in frontend development. I am confident that my skills and enthusiasm will make a valuable contribution to your development team.

    Please find my resume attached for your consideration. I look forward to the opportunity to discuss my application further.

    Thank you for your time and consideration.

    Best regards,
    ${name}
    ${linkedInAnchor}
    ${phoneNumberYes}
        `,
        'Backend Developer': `
    Dear ${recepiantNameYes},

    I am writing to express my interest in the Backend Developer position at ${company}. My name is ${name}, and I have extensive experience in building robust and scalable server-side applications.

    With expertise in [mention key technologies, e.g., Node.js, Python, Java, RESTful APIs, etc.], I have successfully developed and maintained backend services that support high-performance applications. I am passionate about solving complex problems and optimizing system performance.

    I have attached my resume for your review and would be grateful for the opportunity to discuss how my skills align with the needs of your team.

    Thank you for your consideration.

    Sincerely,
    ${name}
    ${linkedInAnchor}
    ${phoneNumberYes}
        `,
        'Android Developer': `
    Dear ${recepiantNameYes},

    My name is ${name}, and I am excited to apply for the Android Developer position at ${company}. I have a strong background in Android development with proficiency in Java/Kotlin and experience in developing and launching successful apps on the Google Play Store.

    I am passionate about mobile app development and continuously strive to learn and implement the latest advancements in Android technology. I am confident that my experience and dedication will be a valuable asset to your team.

    Please find my resume and a link to my portfolio attached for your review. I look forward to the opportunity to discuss how I can contribute to ${company}.

    Thank you for your time and consideration.

    Best regards,
    ${name}
    ${linkedInAnchor}
    ${phoneNumberYes}
        `,
        'UI/UX Designer': `
    Dear ${recepiantNameYes},

    My name is ${name}, and I am reaching out to apply for the UI/UX Designer position at ${company}. With a strong foundation in user-centered design principles, I have created intuitive and aesthetically pleasing interfaces that enhance the user experience.

    I am skilled in using tools such as Sketch, Figma, and Adobe XD, and have a deep understanding of the importance of wireframing, prototyping, and user testing in the design process. I am eager to bring my creativity and technical skills to your design team.

    Attached is my resume and portfolio showcasing my work. I look forward to discussing how I can contribute to the success of ${company}.

    Thank you for your consideration.

    Best regards,
    ${name}
    ${linkedInAnchor}
    ${phoneNumberYes}
        `,
        'Mobile Engineer': `
    Dear ${recepiantNameYes},

    I hope you are doing well. My name is ${name}, and I am writing to apply for the Mobile Engineer position at ${company}. With experience in both iOS and Android development, I have developed and maintained several high-quality mobile applications.

    I am proficient in Swift, Kotlin, and Flutter, and have a deep understanding of mobile app architecture and performance optimization. I am excited about the opportunity to bring my skills and experience to your team.

    Please find my resume attached for your review. I am looking forward to the possibility of discussing this opportunity further.

    Thank you for your time and consideration.

    Best regards,
    ${name}
    ${linkedInAnchor}
    ${phoneNumberYes}
        `,
        'Quality Engineer': `
    Dear ${recepiantNameYes},

    My name is ${name}, and I am excited to apply for the Quality Engineer position at ${company}. With a solid background in quality assurance and testing methodologies, I have successfully implemented quality control processes that ensure the reliability and performance of software products.

    I am experienced in [mention key tools and technologies, e.g., Selenium, JIRA, automated testing frameworks, etc.], and I am passionate about maintaining high standards of quality in every project I undertake.

    Please find my resume attached for your review. I look forward to the opportunity to discuss how my skills and experience align with the needs of your team.

    Thank you for your consideration.

    Best regards,
    ${name}
    ${linkedInAnchor}
    ${phoneNumberYes}
        `,
        'Quality Assurance': `
    Dear ${recepiantNameYes},

    My name is ${name}, and I am writing to apply for the Quality Assurance (QA) position at ${company}. With a strong background in software testing and quality assurance, I have a keen eye for detail and a commitment to delivering defect-free software.

    I am experienced in both manual and automated testing, and I am proficient in using tools such as [mention relevant tools, e.g., Selenium, TestRail, etc.]. I am confident that my skills will contribute to ensuring the high quality of your products.

    Attached is my resume for your review. I would welcome the opportunity to discuss how I can contribute to the success of ${company}.

    Thank you for your time and consideration.

    Best regards,
    ${name}
    ${linkedInAnchor}
    ${phoneNumberYes}
        `,
        'Other': `
    Dear ${recepiantNameYes},

    I hope this email finds you well. My name is ${name}, and I am writing to express my interest in the ${jobTitle} position at ${company}. With my background in [mention your key skills or industry experience], I am confident in my ability to contribute positively to your team.

    Throughout my career, I have developed a strong foundation in [relevant skills or experiences], which I believe align well with the requirements of this role. I am particularly excited about the opportunity to work with ${company} because [mention something specific about the company or why you're interested in this role].

    Please find my resume attached for your consideration. I would welcome the opportunity to discuss how my skills and experiences can contribute to the continued success of ${company}.

    Thank you for your time and consideration.

    Best regards,
    ${name}
    ${linkedInAnchor}
    ${phoneNumberYes}
      `,
    };
  
    return templateBodies[jobTitle] || '';
  };
  