import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faGitlab,
  faInstagram,
  faLinkedin,
  faMedium,
  faTelegram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export const socialIcons = {
  github: faGithub,
  gitlab: faGitlab,
  x: faXTwitter,
  linkedin: faLinkedin,
  medium: faMedium,
  telegram: faTelegram,
  youtube: faYoutube,
  instagram: faInstagram,
  email: faEnvelope,
} as const satisfies Record<string, IconDefinition>;

export type SocialIconKey = keyof typeof socialIcons;

export const uiIcons = {
  envelope: faEnvelope,
  phone: faPhone,
} as const satisfies Record<string, IconDefinition>;

export type UiIconKey = keyof typeof uiIcons;

export function SocialIcon({
  name,
  className,
}: {
  name: SocialIconKey;
  className?: string;
}) {
  return (
    <FontAwesomeIcon icon={socialIcons[name]} className={className} aria-hidden />
  );
}

export function UiIcon({
  name,
  className,
}: {
  name: UiIconKey;
  className?: string;
}) {
  return <FontAwesomeIcon icon={uiIcons[name]} className={className} aria-hidden />;
}
