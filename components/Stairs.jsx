import { motion } from "framer-motion"

// variants
const stairAnimation = {
    initial: { top: "0%", },
    animate: { top: "100%", },
    exit: { top: ["100%", "0%"], },
};

// 스타거 지연을 위한 역순 인덱스를 계산하세요.
const reverseIndex = (index)=> {
    const totalSteps = 6;
    return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
    {/* 6개의 모션 div를 랜더링하여 각 div가 계단의 단계를 나타냅니다.
    각 div는 stairsanimation 객체로 정의된 동일한 애니메이션을 갖습니다. 각 div의 지연 시간은 역순 인덱스를 기반으로 동적으로 계산되어, 각 단계에 대해 감소하는 지연 시간을 갖는 스타거 효과를 생성합니다. */}

    {[...Array(6)].map((_, index)=> {
        return (
            <motion.div
                key={index}
                variants={stairAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    duration: 0.4,
                    ease: 'easeInOut',
                    delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
            />
        );
    })}
    </>
  )
}

export default Stairs