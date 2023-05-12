import * as React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
interface ICircleBoxProps {
  data: any;
  className?: string;
}

const CircleBox: React.FC<ICircleBoxProps> = ({ data, className }) => {
  const [radius, setRadius] = useState("8rem");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      setIsMobile(isMobile);
    };

    handleResize(); // 初始化时获取一次屏幕宽度

    window.addEventListener("resize", handleResize);

    // 组件卸载时移除事件监听器
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={className}>
      <ul
        onMouseEnter={() => setRadius(isMobile ? "10rem" : "12rem")}
        onMouseLeave={() => setRadius(isMobile ? "10rem" : "10rem")}
        className="flex items-center justify-center w-48 h-48 rounded-full animate-boxrotate z-50 relative "
      >
        {data.map(({ id, imageURL }: any, index: number) => {
          const angle = (index / data.length) * 360; // 计算每个 li 元素的角度

          // const radius = "10rem"; // 设置半径大小，例如 8rem
          const liStyle = {
            left: `50%`,
            top: `50%`,
            transition: "1s ease-in-out",
            transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${radius}) rotate(-${angle}deg)`,
          };
          const imgStyle = {
            transform: `rotate(${angle + 90}deg)`, // 将图片旋转到对应角度的位置
          };

          return (
            <li
              key={id}
              style={liStyle}
              className="absolute left-2/4 right-2/4 w-32 sm:w-52 "
            >
              <img
                style={imgStyle}
                src={imageURL}
                className="w-full rounded-xl overflow-hidden "
                alt=""
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CircleBox;
