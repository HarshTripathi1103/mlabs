import { cn } from '../../utils/cn';
import { motion } from 'framer-motion';

 
export function WordsPullUp({
  text,
  className = '',
  inView = false,
  justify = 'start' 
}: {
  text: string;
  className?: string;
  inView?: boolean;
  justify?: 'start' | 'center' | 'end';
}) {
  const splittedText = text.split(' ');
 
  const pullupVariant = {
    initial: { y: 20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };
  
  return (
    <div className={`flex justify-${justify} flex-wrap`}>
      {splittedText.map((current, i) => (
        <motion.div
          key={i}
          variants={pullupVariant}
          initial="initial"
          animate={inView ? 'animate' : 'initial'} 
          custom={i}
          className={cn(
            'font-bold', 
            'pr-2', 
            className
          )}
        >
          {current === '' ? <span>&nbsp;</span> : current}
        </motion.div>
      ))}
    </div>
  );
}