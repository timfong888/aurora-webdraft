import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accept & Done | Roomlift",
  description: "Your room plan is ready. View your Reveal Card and share your transformation.",
};

export default function AcceptDonePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 py-8">
      <AcceptDoneSvg />
    </main>
  );
}

function AcceptDoneSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 390 844"
      width="390"
      height="844"
      role="img"
      aria-label="Screen 10: Accept & Done — Your Room Plan is Ready"
    >
      <defs>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFF9F0" />
          <stop offset="40%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#FFF5EB" />
        </linearGradient>
        <linearGradient id="shareBtn" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#E8834A" />
          <stop offset="100%" stopColor="#D4693A" />
        </linearGradient>
        <linearGradient id="checkGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34C759" />
          <stop offset="100%" stopColor="#28A745" />
        </linearGradient>
        <linearGradient id="cardGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FAFAFA" />
          <stop offset="100%" stopColor="#F5F0EB" />
        </linearGradient>
        <linearGradient id="beforeImg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4C4B0" />
          <stop offset="50%" stopColor="#C9B89E" />
          <stop offset="100%" stopColor="#BBA98F" />
        </linearGradient>
        <linearGradient id="afterImg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A8C5B8" />
          <stop offset="50%" stopColor="#96B8A8" />
          <stop offset="100%" stopColor="#89AB9B" />
        </linearGradient>
        <filter id="cardShadow" x="-5%" y="-3%" width="110%" height="115%">
          <feDropShadow dx="0" dy="4" stdDeviation="12" floodColor="#00000018" />
        </filter>
        <filter id="softShadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="#00000012" />
        </filter>
        <filter id="checkGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#34C75940" />
        </filter>
        <clipPath id="cardClip">
          <rect x="50" y="268" width="290" height="195" rx="12" />
        </clipPath>
        <clipPath id="phoneClip">
          <rect x="0" y="0" width="390" height="844" rx="44" />
        </clipPath>
      </defs>

      {/* Phone Frame */}
      <rect width="390" height="844" rx="44" fill="url(#bgGrad)" />
      <rect width="390" height="844" rx="44" fill="none" stroke="#E0DCD8" strokeWidth="1" />

      {/* Confetti / Sparkle Elements */}
      <g opacity="0.15">
        <circle cx="45" cy="130" r="3" fill="#E8834A" />
        <circle cx="72" cy="108" r="2" fill="#F4A261" />
        <circle cx="30" cy="165" r="2.5" fill="#34C759" />
        <rect x="58" y="145" width="6" height="6" rx="1" fill="#E76F51" transform="rotate(30 61 148)" />
        <rect x="25" y="120" width="5" height="5" rx="1" fill="#FFB347" transform="rotate(45 27.5 122.5)" />
      </g>
      <g opacity="0.15">
        <circle cx="345" cy="125" r="3" fill="#F4A261" />
        <circle cx="320" cy="105" r="2" fill="#E8834A" />
        <circle cx="360" cy="160" r="2.5" fill="#FFB347" />
        <rect x="330" y="140" width="6" height="6" rx="1" fill="#34C759" transform="rotate(-20 333 143)" />
        <rect x="355" y="115" width="5" height="5" rx="1" fill="#E76F51" transform="rotate(-45 357.5 117.5)" />
      </g>
      <g opacity="0.08">
        <circle cx="85" cy="200" r="1.5" fill="#E8834A" />
        <circle cx="310" cy="215" r="1.5" fill="#F4A261" />
        <circle cx="60" cy="480" r="2" fill="#FFB347" />
        <circle cx="340" cy="500" r="1.5" fill="#E76F51" />
        <circle cx="55" cy="600" r="1.5" fill="#34C759" />
        <circle cx="335" cy="620" r="2" fill="#F4A261" />
      </g>
      <g opacity="0.12">
        <path d="M90 145 L93 150 L90 155 L87 150Z" fill="#FFD700" />
        <path d="M305 140 L307 144 L305 148 L303 144Z" fill="#FFD700" />
        <path d="M115 175 L117 178 L115 181 L113 178Z" fill="#FFD700" />
        <path d="M280 170 L282 173 L280 176 L278 173Z" fill="#FFD700" />
      </g>

      {/* Status Bar */}
      <g>
        <text
          x="36"
          y="22"
          fontFamily="-apple-system, 'SF Pro Text', 'Helvetica Neue', sans-serif"
          fontSize="15"
          fontWeight="600"
          fill="#1C1C1E"
          textAnchor="start"
        >
          9:41
        </text>
        <rect x="148" y="4" width="94" height="28" rx="14" fill="#1C1C1E" />
        <g transform="translate(290, 10)">
          <rect x="0" y="6" width="3" height="4" rx="0.5" fill="#1C1C1E" />
          <rect x="5" y="4" width="3" height="6" rx="0.5" fill="#1C1C1E" />
          <rect x="10" y="2" width="3" height="8" rx="0.5" fill="#1C1C1E" />
          <rect x="15" y="0" width="3" height="10" rx="0.5" fill="#1C1C1E" />
        </g>
        <g transform="translate(316, 8)">
          <path d="M4,8 Q7,5.5 10,8" stroke="#1C1C1E" strokeWidth="1.3" fill="none" strokeLinecap="round" />
          <path d="M2,5.5 Q7,1.5 12,5.5" stroke="#1C1C1E" strokeWidth="1.3" fill="none" strokeLinecap="round" />
          <circle cx="7" cy="9.5" r="1.2" fill="#1C1C1E" />
        </g>
        <g transform="translate(340, 8)">
          <rect x="0" y="0" width="24" height="11" rx="2.5" stroke="#1C1C1E" strokeWidth="1" fill="none" />
          <rect x="1.5" y="1.5" width="19" height="8" rx="1.5" fill="#34C759" />
          <rect x="25" y="3" width="1.5" height="5" rx="0.75" fill="#1C1C1E" />
        </g>
      </g>

      {/* Success Checkmark Circle */}
      <g filter="url(#checkGlow)">
        <circle cx="195" cy="100" r="36" fill="url(#checkGrad)" />
        <polyline
          points="177,100 190,113 215,88"
          stroke="white"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="195" cy="100" r="42" fill="none" stroke="#34C759" strokeWidth="1.5" opacity="0.25" />
        <circle cx="195" cy="100" r="50" fill="none" stroke="#34C759" strokeWidth="1" opacity="0.12" />
      </g>

      {/* Heading */}
      <text
        x="195"
        y="168"
        fontFamily="-apple-system, 'SF Pro Display', 'Helvetica Neue', sans-serif"
        fontSize="24"
        fontWeight="700"
        fill="#1C1C1E"
        textAnchor="middle"
      >
        Your Room Plan is Ready!
      </text>
      <text
        x="195"
        y="192"
        fontFamily="-apple-system, 'SF Pro Text', 'Helvetica Neue', sans-serif"
        fontSize="14"
        fill="#8E8E93"
        textAnchor="middle"
      >
        Your transformation journey starts now
      </text>

      {/* Reveal Card */}
      <g filter="url(#cardShadow)">
        <rect x="40" y="220" width="310" height="290" rx="16" fill="white" />
        <rect x="40" y="220" width="310" height="290" rx="16" fill="none" stroke="#F0EBE4" strokeWidth="1" />
        <text
          x="60"
          y="248"
          fontFamily="-apple-system, 'SF Pro Text', 'Helvetica Neue', sans-serif"
          fontSize="10"
          fontWeight="600"
          fill="#B8A99A"
          letterSpacing="1.5"
        >
          REVEAL CARD
        </text>
        <g transform="translate(299, 236)">
          <rect x="0" y="0" width="36" height="16" rx="4" fill="#E8834A" opacity="0.12" />
          <text
            x="18"
            y="12"
            fontFamily="-apple-system, 'SF Pro Text', 'Helvetica Neue', sans-serif"
            fontSize="8"
            fontWeight="700"
            fill="#E8834A"
            textAnchor="middle"
          >
            roomlift
          </text>
        </g>

        {/* Before image */}
        <rect x="50" y="260" width="143" height="130" rx="10" fill="url(#beforeImg)" />
        <g opacity="0.35">
          <line x1="50" y1="355" x2="193" y2="355" stroke="#A69480" strokeWidth="0.5" />
          <rect x="70" y="310" width="60" height="30" rx="4" fill="#B09A84" opacity="0.6" />
          <rect x="65" y="305" width="10" height="40" rx="3" fill="#B09A84" opacity="0.5" />
          <rect x="125" y="305" width="10" height="40" rx="3" fill="#B09A84" opacity="0.5" />
          <rect x="145" y="320" width="25" height="25" rx="2" fill="#A8937D" opacity="0.5" />
          <rect x="150" y="300" width="15" height="20" rx="2" fill="#C4B39E" opacity="0.4" />
          <circle cx="90" cy="300" r="8" fill="#C4B39E" opacity="0.3" />
          <rect x="85" y="272" width="30" height="22" rx="2" fill="#DDD5C8" opacity="0.5" />
          <line x1="100" y1="272" x2="100" y2="294" stroke="#C4B39E" strokeWidth="0.5" opacity="0.5" />
          <line x1="85" y1="283" x2="115" y2="283" stroke="#C4B39E" strokeWidth="0.5" opacity="0.5" />
        </g>
        <rect x="56" y="266" width="52" height="18" rx="4" fill="#00000050" />
        <text
          x="82"
          y="278"
          fontFamily="-apple-system, 'SF Pro Text', 'Helvetica Neue', sans-serif"
          fontSize="9"
          fontWeight="700"
          fill="white"
          textAnchor="middle"
          letterSpacing="0.8"
        >
          BEFORE
        </text>

        {/* After image */}
        <rect x="197" y="260" width="143" height="130" rx="10" fill="url(#afterImg)" />
        <g opacity="0.4">
          <line x1="197" y1="355" x2="340" y2="355" stroke="#7A9E8C" strokeWidth="0.5" />
          <rect x="215" y="315" width="65" height="25" rx="5" fill="#7A9E8C" opacity="0.6" />
          <rect x="212" y="310" width="8" height="32" rx="3" fill="#7A9E8C" opacity="0.5" />
          <rect x="277" y="310" width="8" height="32" rx="3" fill="#7A9E8C" opacity="0.5" />
          <rect x="225" y="315" width="14" height="10" rx="3" fill="#B8D4C8" opacity="0.5" />
          <rect x="255" y="315" width="14" height="10" rx="3" fill="#B8D4C8" opacity="0.5" />
          <circle cx="310" cy="308" r="12" fill="#8CB8A0" opacity="0.4" />
          <rect x="307" y="318" width="6" height="14" rx="2" fill="#A69480" opacity="0.4" />
          <rect x="295" y="330" width="20" height="12" rx="2" fill="#C4B8A8" opacity="0.4" />
          <rect x="235" y="272" width="30" height="22" rx="2" fill="#C8DDD2" opacity="0.5" />
          <line x1="250" y1="272" x2="250" y2="294" stroke="#A8C5B8" strokeWidth="0.5" opacity="0.5" />
          <line x1="235" y1="283" x2="265" y2="283" stroke="#A8C5B8" strokeWidth="0.5" opacity="0.5" />
          <rect x="218" y="275" width="12" height="16" rx="1.5" fill="#B8D4C8" opacity="0.3" />
        </g>
        <rect x="203" y="266" width="44" height="18" rx="4" fill="#00000050" />
        <text
          x="225"
          y="278"
          fontFamily="-apple-system, 'SF Pro Text', 'Helvetica Neue', sans-serif"
          fontSize="9"
          fontWeight="700"
          fill="white"
          textAnchor="middle"
          letterSpacing="0.8"
        >
          AFTER
        </text>

        {/* Arrow between before/after */}
        <g transform="translate(186, 318)">
          <circle cx="8" cy="8" r="10" fill="white" opacity="0.9" />
          <path
            d="M4,8 L12,8 M9,4 L13,8 L9,12"
            stroke="#E8834A"
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Card metadata */}
        <line x1="60" y1="402" x2="330" y2="402" stroke="#F0EBE4" strokeWidth="1" />
        <text
          x="60"
          y="424"
          fontFamily="-apple-system, 'SF Pro Display', 'Helvetica Neue', sans-serif"
          fontSize="17"
          fontWeight="700"
          fill="#1C1C1E"
        >
          Living Room
        </text>
        <g transform="translate(60, 436)">
          <circle cx="6" cy="8" r="6" fill="#E8834A" opacity="0.12" />
          <text
            x="6"
            y="11.5"
            fontFamily="-apple-system, 'SF Pro Text', 'Helvetica Neue', sans-serif"
            fontSize="8"
            fontWeight="700"
            fill="#E8834A"
            textAnchor="middle"
          >
            $
          </text>
          <text
            x="18"
            y="12"
            fontFamily="-apple-system, 'SF Pro Text', 'Helvetica Neue', sans-serif"
            fontSize="12"
            fill="#6B6B70"
          >
            $189 spent
          </text>
          <circle cx="95" cy="8" r="2" fill="#D1D1D6" />
          <text
            x="105"
            y="12"
            fontFamily="-apple-system, 'SF Pro Text', 'Helvetica Neue', sans-serif"
            fontSize="12"
            fill="#6B6B70"
          >
            6 moves
          </text>
          <circle cx="166" cy="8" r="2" fill="#D1D1D6" />
          <text
            x="176"
            y="12"
            fontFamily="-apple-system, 'SF Pro Text', 'Helvetica Neue', sans-serif"
            fontSize="12"
            fill="#6B6B70"
          >
            Jul 31, 2026
          </text>
        </g>
        <rect x="40" y="494" width="310" height="16" rx="0" fill="#E8834A" opacity="0.04" clipPath="inset(0 0 0 0 round 0 0 16px 16px)" />
        <path d="M40,500 L40,494 Q40,510 56,510 L334,510 Q350,510 350,494 L350,500" fill="#E8834A" opacity="0.04" />
      </g>

      {/* What's Next Section */}
      <text
        x="40"
        y="548"
        fontFamily="-apple-system, 'SF Pro Display', 'Helvetica Neue', sans-serif"
        fontSize="18"
        fontWeight="700"
        fill="#1C1C1E"
      >
        {"What's Next?"}
      </text>

      {/* Action: View checklist */}
      <g transform="translate(40, 562)">
        <rect x="0" y="0" width="310" height="44" rx="10" fill="white" filter="url(#softShadow)" />
        <text
          x="16"
          y="28"
          fontFamily="-apple-system, 'SF Pro Text', 'Helvetica Neue', sans-serif"
          fontSize="18"
        >
          📋
        </text>
        <text
          x="44"
          y="27"
          fontFamily="-apple-system, 'SF Pro Text', 'Helvetica Neue', sans-serif"
          fontSize="14"
          fontWeight="500"
          fill="#1C1C1E"
        >
          View your action checklist
        </text>
        <path d="M292,18 L298,23 L292,28" stroke="#C7C7CC" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Action: Shop products */}
      <g transform="translate(40, 612)">
        <rect x="0" y="0" width="310" height="44" rx="10" fill="white" filter="url(#softShadow)" />
        <text
          x="16"
          y="28"
          fontFamily="-apple-system, 'SF Pro Text', 'Helvetica Neue', sans-serif"
          fontSize="18"
        >
          🛒
        </text>
        <text
          x="44"
          y="27"
          fontFamily="-apple-system, 'SF Pro Text', 'Helvetica Neue', sans-serif"
          fontSize="14"
          fontWeight="500"
          fill="#1C1C1E"
        >
          Shop recommended products
        </text>
        <path d="M292,18 L298,23 L292,28" stroke="#C7C7CC" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Action: Share Reveal Card */}
      <g transform="translate(40, 662)">
        <rect x="0" y="0" width="310" height="44" rx="10" fill="white" filter="url(#softShadow)" />
        <text
          x="16"
          y="28"
          fontFamily="-apple-system, 'SF Pro Text', 'Helvetica Neue', sans-serif"
          fontSize="18"
        >
          📤
        </text>
        <text
          x="44"
          y="27"
          fontFamily="-apple-system, 'SF Pro Text', 'Helvetica Neue', sans-serif"
          fontSize="14"
          fontWeight="500"
          fill="#1C1C1E"
        >
          Share your Reveal Card
        </text>
        <path d="M292,18 L298,23 L292,28" stroke="#C7C7CC" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Action: Start another room */}
      <g transform="translate(40, 712)">
        <rect x="0" y="0" width="310" height="44" rx="10" fill="white" filter="url(#softShadow)" />
        <text
          x="16"
          y="28"
          fontFamily="-apple-system, 'SF Pro Text', 'Helvetica Neue', sans-serif"
          fontSize="18"
        >
          🏠
        </text>
        <text
          x="44"
          y="27"
          fontFamily="-apple-system, 'SF Pro Text', 'Helvetica Neue', sans-serif"
          fontSize="14"
          fontWeight="500"
          fill="#1C1C1E"
        >
          Start another room
        </text>
        <path d="M292,18 L298,23 L292,28" stroke="#C7C7CC" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Share CTA Button */}
      <g transform="translate(40, 774)">
        <rect x="0" y="0" width="310" height="48" rx="14" fill="url(#shareBtn)" />
        <g transform="translate(108, 14)">
          <path d="M10,2 L10,14" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M5,7 L10,2 L15,7" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M3,12 L3,18 Q3,20 5,20 L15,20 Q17,20 17,18 L17,12"
            stroke="white"
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <text
          x="178"
          y="29"
          fontFamily="-apple-system, 'SF Pro Text', 'Helvetica Neue', sans-serif"
          fontSize="16"
          fontWeight="600"
          fill="white"
          textAnchor="middle"
        >
          Share Your Transformation
        </text>
      </g>

      {/* Secondary Link */}
      <text
        x="195"
        y="840"
        fontFamily="-apple-system, 'SF Pro Text', 'Helvetica Neue', sans-serif"
        fontSize="14"
        fontWeight="500"
        fill="#E8834A"
        textAnchor="middle"
      >
        Back to My Rooms
      </text>

      {/* Confetti accents near checkmark */}
      <g opacity="0.18">
        <path d="M140 72 L143 76 L140 80 L137 76Z" fill="#FFB347" />
        <path d="M250 75 L253 79 L250 83 L247 79Z" fill="#E76F51" />
        <circle cx="155" cy="56" r="2.5" fill="#F4A261" />
        <circle cx="238" cy="60" r="2" fill="#34C759" />
        <circle cx="130" cy="90" r="1.5" fill="#E8834A" />
        <circle cx="260" cy="88" r="2" fill="#FFB347" />
        <path d="M160 138 L162 142 L160 146 L158 142Z" fill="#34C759" />
        <path d="M228 135 L230 139 L228 143 L226 139Z" fill="#F4A261" />
      </g>

      {/* Top accent line */}
      <rect x="155" y="46" width="80" height="2" rx="1" fill="#E8834A" opacity="0.15" />
    </svg>
  );
}
