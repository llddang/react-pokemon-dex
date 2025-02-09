import React from "react";
import { useNavigate } from "react-router-dom";
import {
  MdArrowBack,
  MdArrowDownward,
  MdArrowForward,
  MdArrowUpward,
  MdGrade,
} from "react-icons/md";
import ButtonLink from "@/components/common/ButtonLink";
import IconButton from "@/components/common/IconButton";
import PokemonMobilePadS from "@/components/features/pokemon/PokemonMobilePad.styled";

import KeyActionType, { KeyAction } from "@/types/keyAction.type";

interface PokemonMobilePadProps {
  focusedId: number;
  executeKeyAction: (key: KeyActionType) => void;
}

export default function PokemonMobilePad({
  focusedId,
  executeKeyAction,
}: PokemonMobilePadProps) {
  const navigate = useNavigate();

  function handleButtonClick(e: React.MouseEvent<HTMLDivElement>) {
    const button = (e.target as HTMLElement).closest("button");
    if (!button) return;

    const actionKey = button.getAttribute("data-key") as KeyActionType;
    executeKeyAction(actionKey);
  }

  function handleDetailLinkButtonClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    navigate(`/pokemon/detail/${focusedId}`, {
      state: { focusedId },
    });
  }

  return (
    <PokemonMobilePadS.Container onClick={handleButtonClick}>
      <PokemonMobilePadS.KeyContainer>
        <IconButton icon={<MdArrowUpward />} data-key={KeyAction.UP} />
        <div>
          <IconButton icon={<MdArrowBack />} data-key={KeyAction.LEFT} />
          <IconButton icon={<MdGrade />} data-key={KeyAction.ENTER} />
          <IconButton icon={<MdArrowForward />} data-key={KeyAction.RIGHT} />
        </div>
        <IconButton icon={<MdArrowDownward />} data-key={KeyAction.DOWN} />
      </PokemonMobilePadS.KeyContainer>
      <ButtonLink
        $size="sm"
        href={`/pokemon/detail/${focusedId}`}
        onClick={handleDetailLinkButtonClick}
      >
        상세 보기
      </ButtonLink>
    </PokemonMobilePadS.Container>
  );
}
