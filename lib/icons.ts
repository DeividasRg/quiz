import checkDefault from "@/public/checkDefault.svg";
import checkHighlighted from "@/public/checkHighlighted.svg";

import questionDefault from "@/public/questionMarkDefault.svg";
import questionHighlighted from "@/public/questionMarkHighlighted.svg";

import stopDefault from "@/public/stopSignDefault.svg";
import stopHighlighted from "@/public/stopSignHighlighted.svg";

import heartDefault from "@/public/hearthDefault.svg";
import heartHighlighted from "@/public/hearthHighlighted.svg";

import handshakeDefault from "@/public/handshakeDefault.svg";
import handshakeHighlighted from "@/public/handshakeHighlighted.svg";

import gearDefault from "@/public/gearDefault.svg";
import gearHighlighted from "@/public/gearHighlighted.svg";

import moneyDefault from "@/public/moneyDefault.svg";
import moneyHighlighted from "@/public/moneyHighlighted.svg";

import meterDefault from "@/public/meterDefault.svg";
import meterHighlighted from "@/public/meterHighllighted.svg";

import supermanDefault from "@/public/supermanDefault.svg";
import supermanHighlighted from "@/public/supermanHighlighted.svg";

import thunderDefault from "@/public/thunderDefault.svg";
import thunderHighlighted from "@/public/thunderHighlighted.svg";

import chatDefault from "@/public/chatDefault.svg";
import chatHighlighted from "@/public/chatHighlighted.svg";

import flowerDefault from "@/public/flowerDefault.svg";
import flowerHighlighted from "@/public/flowerHighlighted.svg";

import emojiDefault from "@/public/emojiDefault.svg";
import emojiHighlighted from "@/public/emojiHighlighted.svg";

import taskerDefault from "@/public/taskerDefault.svg";
import taskerHighlighted from "@/public/taskerHighlighted.svg";

import rocketDefault from "@/public/rocketDefault.svg";
import rocketHighlighted from "@/public/rocketHighlighted.svg";

import lightBulb from "@/public/lightBulb.svg";
import swirl from "@/public/swirl.svg";
import block from "@/public/block.svg";
import lightning from "@/public/lightning.svg";

export const icons = {
  check: { default: checkDefault, highlighted: checkHighlighted },
  question: { default: questionDefault, highlighted: questionHighlighted },
  stop: { default: stopDefault, highlighted: stopHighlighted },
  heart: { default: heartDefault, highlighted: heartHighlighted },
  handshake: { default: handshakeDefault, highlighted: handshakeHighlighted },
  gear: { default: gearDefault, highlighted: gearHighlighted },
  money: { default: moneyDefault, highlighted: moneyHighlighted },
  meter: { default: meterDefault, highlighted: meterHighlighted },
  superman: { default: supermanDefault, highlighted: supermanHighlighted },
  thunder: { default: thunderDefault, highlighted: thunderHighlighted },
  chat: { default: chatDefault, highlighted: chatHighlighted },
  flower: { default: flowerDefault, highlighted: flowerHighlighted },
  emoji: { default: emojiDefault, highlighted: emojiHighlighted },
  tasker: { default: taskerDefault, highlighted: taskerHighlighted },
  rocket: { default: rocketDefault, highlighted: rocketHighlighted },
  swirl,
  lightBulb,
  block,
  lightning,
} as const;
