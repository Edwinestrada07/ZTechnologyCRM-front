import React from "react";

// Configuración de los ítems del Marquee
const marqueeItems = [
    {
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        name: "Alex wonderson",
        title: "Founder of Lyconf",
        quote: "As a small business owner, I was doing everything and my workload was increasing. With this startup, I was able to save time so I could focus on the things that matter most: my clients and my family."
    },
    {
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        name: "Karim ahmed",
        title: "DevOps engineer",
        quote: "My company's software now is easy to use, saves time and money, and is loved by a lot of users. One customer saved $10k over the course of 3 years and another saves 8 hours per week! Thanks to Blinder."
    },
    {
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        name: "Lysa stian",
        title: "System manger",
        quote: "My business was in a dire situation. I had no idea what to do, and I felt like I was losing hope. Then I found this Startup and everything changed. It helped me create automated sales."
    },
    {
        avatar: "https://randomuser.me/api/portraits/women/79.jpg",
        name: "Angela stian",
        title: "Product designer",
        quote: "One day, my company was about to go under and I had no idea what to do. I found Blinder and it helped me get my business back on track.Now, my company is flourishing and I see new opportunities."
    },
    {
        avatar: "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
        name: "Jurica koletic",
        title: "Founder of Let’s code",
        quote: "In these difficult economic times, doing business is tough. Funding is hard to come by and many entrepreneurs are struggling to keep their doors open. but when I found this startup everything changed."
    },
    {
        avatar: "https://images.unsplash.com/photo-1590038767624-dac5740a997b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        name: "Kavi laron",
        title: "Full stack engineer",
        quote: "We all know how costly it is to find good help. I was faced with this problem when I lost my data entry staff and my business was on the brink of going under. Thankfully, Blinder saved the day."
    },
];

const Testimonial = () => {
  return (
    <>
      <style>
        {`
          @keyframes marquee {
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      {/* Contenedor del Marquee con gradiente para suavizar los bordes */}
      <div
        className="mb-4 w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        {/* Flex container que contiene los items del Marquee */}
        <div
          className="flex w-[200%] gap-4 pr-4"
          style={{
            animation: "marquee 15s linear infinite",
          }}
        >
          {/* Duplicamos los items del Marquee para que se repitan */}
          {[0, 1].map((index) => (
            <div className="flex flex-1 gap-4" key={index}>
              {marqueeItems.map((item) => (
                <div className="flex-1" key={item.content}>
                  <div className="h-full max-w-60 rounded-xl bg-gray-200 dark:bg-gray-800 p-4 shadow-md">
                    <div className="flex items-center gap-2">
                      {/* Placeholder para un ícono o imagen */}
                      <div className="w-6 h-6 rounded-full bg-gray-400" />
                      {/* Autor del comentario */}
                      <p className="text-xs font-semibold text-gray-700 dark:text-gray-400">
                        {item.author}
                      </p>
                    </div>
                    {/* Contenido del comentario */}
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
