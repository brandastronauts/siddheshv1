import {
  Home, Building2, FlaskConical, FileText, Shield, ShieldCheck, Handshake, Megaphone, Mail,
  Archive, Lightbulb, BookOpen, Users, Download, Database, Lock, Microscope,
  GraduationCap, Briefcase, Eye, Scale, Check, Newspaper, MessageSquare,
  Target, Feather, AlertTriangle, Wrench, ArrowRight, Calendar, Rocket,
  CircuitBoard, Cpu, Heart, Cog, ClipboardList, Globe, Award, MapPin,
  FileArchive, Presentation, Image, BarChart3, Clock, UserCheck, ScrollText,
  BadgeCheck, Network, Landmark
} from 'lucide-react';

const iconMap = {
  // Navigation
  home: Home,
  institute: Building2,
  methodology: FlaskConical,
  publication: FileText,
  publications: FileText,
  governance: Shield,
  collaborate: Handshake,
  newsroom: Megaphone,
  contact: Mail,

  // Research / Academic
  microscope: Microscope,
  flask: FlaskConical,
  eye: Eye,
  database: Database,
  target: Target,
  feather: Feather,
  file: FileText,
  archive: Archive,
  scroll: ScrollText,
  clipboard: ClipboardList,
  clipboardList: ClipboardList,
  chart: BarChart3,
  clock: Clock,

  // Innovation / Patents
  lightbulb: Lightbulb,
  circuit: CircuitBoard,
  cpu: Cpu,
  cog: Cog,
  patent: Lightbulb,
  tool: Wrench,

  // People / Teams
  users: Users,
  user: Users,
  userCheck: UserCheck,
  graduation: GraduationCap,
  briefcase: Briefcase,
  building: Building2,
  landmark: Landmark,

  // Governance / Compliance
  shield: Shield,
  shieldCheck: ShieldCheck,
  scale: Scale,
  check: Check,
  badgeCheck: BadgeCheck,
  lock: Lock,
  alert: AlertTriangle,
  award: Award,

  // Communication / Media
  mail: Mail,
  newspaper: Newspaper,
  message: MessageSquare,
  megaphone: Megaphone,
  globe: Globe,
  network: Network,

  // Downloads / Documents
  download: Download,
  book: BookOpen,
  presentation: Presentation,
  image: Image,
  fileArchive: FileArchive,

  // Mission / Space
  rocket: Rocket,
  mapPin: MapPin,

  // Navigation arrows
  arrow: ArrowRight,
  calendar: Calendar,
  heart: Heart,
};

export default iconMap;

/**
 * Get an icon component by key name.
 * Returns null if key doesn't exist.
 */
export const getIcon = (key) => {
  if (!key) return null;
  return iconMap[key] || null;
};
