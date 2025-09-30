import React from 'react'

interface DecorativeGradientProps {
  width?: number | string
  height?: number | string
  className?: string
}

export default function DecorativeGradient({
  width = 1000,
  height = 96,
  className = ""
}: DecorativeGradientProps) {
  return (
    <div className={className}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 1000 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g style={{ mixBlendMode: 'plus-lighter' }} filter="url(#filter0_f_391_1171)">
          <path d="M500.066 80.4288L500.066 136L-221.22 103.625L500.066 80.4288Z" fill="url(#paint0_linear_391_1171)" />
        </g>
        <g style={{ mixBlendMode: 'plus-lighter' }} filter="url(#filter1_f_391_1171)">
          <path d="M500.065 80.4287L500.065 136L-219.291 108.29L-219.291 105.996C62.3886 99.556 218.386 86.8684 500.065 80.4287Z" fill="url(#paint1_linear_391_1171)" />
        </g>
        <g style={{ mixBlendMode: 'plus-lighter' }} filter="url(#filter2_f_391_1171)">
          <path d="M500.066 80.4287L500.066 136L-221.22 107.76L-221.22 105.138L500.066 80.4287Z" fill="url(#paint2_linear_391_1171)" />
        </g>
        <g style={{ mixBlendMode: 'plus-lighter' }} filter="url(#filter3_f_391_1171)">
          <path d="M500.066 80.4287L500.066 136L-223 108.805L-223 104.76L500.066 80.4287Z" fill="url(#paint3_linear_391_1171)" />
        </g>
        <g style={{ mixBlendMode: 'plus-lighter' }} filter="url(#filter4_f_391_1171)">
          <path d="M499.934 136L499.934 80.429L1221.22 112.803L499.934 136Z" fill="url(#paint4_linear_391_1171)" />
        </g>
        <g style={{ mixBlendMode: 'plus-lighter' }} filter="url(#filter5_f_391_1171)">
          <path d="M499.935 136L499.935 80.4291L1219.29 108.139L1219.29 110.433C937.611 116.873 781.614 129.56 499.935 136Z" fill="url(#paint5_linear_391_1171)" />
        </g>
        <g style={{ mixBlendMode: 'plus-lighter' }} filter="url(#filter6_f_391_1171)">
          <path d="M499.934 136L499.934 80.429L1221.22 108.668L1221.22 111.291L499.934 136Z" fill="url(#paint6_linear_391_1171)" />
        </g>
        <g style={{ mixBlendMode: 'plus-lighter' }} filter="url(#filter7_f_391_1171)">
          <path d="M499.934 136L499.934 80.429L1223 107.624L1223 111.669L499.934 136Z" fill="url(#paint7_linear_391_1171)" />
        </g>
        <defs>
          <filter id="filter0_f_391_1171" x="-271.22" y="30.4287" width="821.285" height="155.571" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_391_1171" />
          </filter>
          <filter id="filter1_f_391_1171" x="-279.291" y="20.4287" width="839.356" height="175.571" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_391_1171" />
          </filter>
          <filter id="filter2_f_391_1171" x="-301.22" y="0.428711" width="881.285" height="215.571" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_391_1171" />
          </filter>
          <filter id="filter3_f_391_1171" x="-243" y="60.4287" width="763.066" height="95.5708" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_391_1171" />
          </filter>
          <filter id="filter4_f_391_1171" x="449.934" y="30.4292" width="821.285" height="155.571" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_391_1171" />
          </filter>
          <filter id="filter5_f_391_1171" x="439.935" y="20.4292" width="839.356" height="175.571" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_391_1171" />
          </filter>
          <filter id="filter6_f_391_1171" x="419.934" y="0.429199" width="881.285" height="215.571" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_391_1171" />
          </filter>
          <filter id="filter7_f_391_1171" x="479.934" y="60.4292" width="763.066" height="95.5708" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_391_1171" />
          </filter>
          <linearGradient id="paint0_linear_391_1171" x1="1055.46" y1="108.214" x2="-221.22" y2="108.214" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F8FBFF" />
            <stop offset="0.360577" stopColor="#0DD5FB" />
            <stop offset="0.715922" stopColor="#052A7D" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient id="paint1_linear_391_1171" x1="1055.46" y1="108.214" x2="-221.22" y2="108.214" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F8FBFF" />
            <stop offset="0.360577" stopColor="#0DD5FB" />
            <stop offset="0.715922" stopColor="#052A7D" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient id="paint2_linear_391_1171" x1="500.066" y1="108.214" x2="-221.22" y2="108.214" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F8FBFF" />
            <stop offset="0.495192" stopColor="#0DD5FB" />
            <stop offset="0.846154" stopColor="#08318C" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient id="paint3_linear_391_1171" x1="914.805" y1="108.214" x2="-221.22" y2="108.214" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F8FBFF" />
            <stop offset="0.392784" stopColor="#0DD5FB" />
            <stop offset="0.778846" stopColor="#052A7D" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient id="paint4_linear_391_1171" x1="-55.4554" y1="108.214" x2="1221.22" y2="108.214" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F8FBFF" />
            <stop offset="0.360577" stopColor="#0DD5FB" />
            <stop offset="0.715922" stopColor="#052A7D" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient id="paint5_linear_391_1171" x1="-55.4551" y1="108.215" x2="1221.22" y2="108.215" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F8FBFF" />
            <stop offset="0.360577" stopColor="#0DD5FB" />
            <stop offset="0.715922" stopColor="#052A7D" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient id="paint6_linear_391_1171" x1="499.934" y1="108.215" x2="1221.22" y2="108.214" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F8FBFF" />
            <stop offset="0.495192" stopColor="#0DD5FB" />
            <stop offset="0.846154" stopColor="#08318C" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient id="paint7_linear_391_1171" x1="85.1953" y1="108.214" x2="1221.22" y2="108.214" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F8FBFF" />
            <stop offset="0.392784" stopColor="#0DD5FB" />
            <stop offset="0.778846" stopColor="#052A7D" />
            <stop offset="1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
