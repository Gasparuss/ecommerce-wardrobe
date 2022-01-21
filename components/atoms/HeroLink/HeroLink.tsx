import Link from 'next/link';
import { StyledHeroLink, StyledHeroLinkQuestion } from './HeroLink.styles';
export const HeroLink = () => {
  return (
    // eslint-disable-next-line @next/next/link-passhref
    <Link href="/" replace>
      <StyledHeroLink>
        <StyledHeroLinkQuestion>furniture?</StyledHeroLinkQuestion>
        sofa!
      </StyledHeroLink>
    </Link>
  );
};
